// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Repositories
import { IUserRepository } from '@api/users/domain/repositories/user';
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

// Models
import { User } from '@database/models/user';

export class UserRepository extends BaseCrudRepository<typeof User, IUserEntity, IUserEntity> implements IUserRepository {
	private readonly personRepository: PersonRepository;

	constructor() {
		super(User);
		this.personRepository = new PersonRepository();
	}

	private async removeRoles(userModel, transaction) {
		const roles = await userModel.getRoles();
		if (roles?.length > 0) {
			const removeRoles = roles.map(({ id }) => id);
			await userModel.removeRoles(removeRoles, { transaction });
		}
	}

	async findAll(): Promise<IUserEntity[]> {
		const options = {
			include: ['person', 'roles'],
		};
		return super.findAll(options);
	}

	async findOne({ query, options }: IQueryParams): Promise<IUserEntity> {
		const buildOptions = {
			include: ['person', 'roles'],
			...options,
		};
		return super.findOne({ query, options: buildOptions });
	}

	async upsert(data: IUserEntity, id?: number): Promise<IUserEntity> {
		return sequelize.transaction(async (transaction) => {
			const { password, ipAddress, rolesId, personId, ...personValues } = data;

			const { id: newPersonId }: any = await this.personRepository.updateOrCreate(
				{ ...personValues, ipAddress },
				personId && { id: personId },
				transaction,
			);

			const userModel: any = await this.updateOrCreate({ ipAddress, password, personId: newPersonId }, id && { id }, transaction);

			if (id) {
				await this.removeRoles(userModel, transaction);
			}

			if (rolesId?.length > 0) {
				await userModel.addRoles(rolesId, { transaction });
			}

			return userModel;
		});
	}
}
