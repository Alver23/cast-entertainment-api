// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Teacher } from '@database/models/teacher';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

// Models
import { Rhythm } from '@database/models/rhythm';

// Interfaces
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export class TeacherRepository extends BaseCrudRepository<typeof Teacher, ITeacherEntity, ITeacherEntity> {
	private readonly personRepository: PersonRepository;

	constructor() {
		super(Teacher);
		this.personRepository = new PersonRepository();
	}

	public async findOne({ query }: IQueryParams): Promise<ITeacherEntity> {
		const options = {
			include: [{ association: 'person' }, { association: 'rhythm' }],
		};
		return super.findOne({ query, options });
	}

	public async create(data: ITeacherEntity): Promise<ITeacherEntity> {
		return this.upsert(data);
	}

	public async updateOne(id: number, data: ITeacherEntity): Promise<ITeacherEntity> {
		await super.findOne({ query: { id } });
		return this.upsert(data, id);
	}

	async upsert(data: ITeacherEntity, id?: number): Promise<ITeacherEntity> {
		return sequelize.transaction(async (transaction) => {
			const { nativeLanguage, otherLanguage, personId, ipAddress, rhythms, ...personValues } = data;

			const { id: newPersonId } = await this.personRepository.updateOrCreate(
				{ ...personValues, ipAddress },
				personId && { id: personId },
				transaction,
			);

			const teacher: any = await this.updateOrCreate(
				{ nativeLanguage, otherLanguage, ipAddress, personId: newPersonId },
				id && { id },
				transaction,
			);

			if (rhythms?.length > 0) {
				await Promise.all(
					rhythms.map(async (item) => {
						await Rhythm.destroy({ where: { rhythmableId: teacher.id, rhythmableType: 'teacher' } });
						return teacher.createRhythm({ title: item }, transaction);
					}),
				);
			}

			return teacher;
		});
	}
}
