// Dependencies
import { hash } from 'bcrypt';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Services
import { IPersonService, personServiceInstance } from '@api/persons/services';

// Interfaces
import { UserRequest } from '@database/models/user/user-interface';

// Database
import { User } from '@database/models/user';
import { IUserService, IUserResponse } from './user-service-interface';

export class UserService implements IUserService {
	private readonly saltRound = 10;

	constructor(private readonly personService: IPersonService) {}

	private async hashedPassword(password): Promise<string> {
		return hash(password, this.saltRound);
	}

	public async findAll(): Promise<IUserResponse[]> {
		return User.findAll<User>({
			include: User.associations.person,
		});
	}

	public async findOne({ query }): Promise<IUserResponse> {
		return User.findOne<User>({ where: query, include: User.associations.person });
	}

	public async create(data: UserRequest): Promise<IUserResponse> {
		try {
			const { password, ipAddress } = data;
			return await sequelize.transaction(async (transaction) => {
				const personInstance: any = await this.personService.create(data, transaction);
				const hashedPassword = await this.hashedPassword(password);
				const userModel = await personInstance.createUser({ ipAddress, password: hashedPassword }, { transaction });
				const user = userModel.toJSON();
				delete user.password;
				delete user.PersonId;
				return {
					...user,
					person: { ...personInstance.toJSON() },
				};
			});
		} catch (error) {
			throw new Error(error);
		}
	}

	public async findOrCreate(data: UserRequest): Promise<IUserResponse> {
		try {
			const { password, email, ipAddress } = data;
			return await sequelize.transaction(async (transaction) => {
				const hashedPassword = await this.hashedPassword(password);
				const personModel: any = await this.personService.findOrCreate({ query: { email }, data, transaction });
				const { id } = personModel;
				const [userModel] = await User.findOrCreate<User>({
					where: { personId: id },
					defaults: { password: hashedPassword, ipAddress },
					transaction,
				});
				return {
					...userModel,
					person: { ...personModel.toJSON() },
				};
			});
		} catch (error) {
			throw new Error(error);
		}
	}
}

export const userServiceInstance = new UserService(personServiceInstance);
