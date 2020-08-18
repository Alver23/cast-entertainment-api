// Dependencies
import { Transaction } from 'sequelize';

// Database Models
import { Person } from '@database/models/person';

// Interfaces
import { PersonRequest } from '@database/models/person/person-interface';
import { IPersonResponse, IPersonService, IFindParams, IFindOrCreateParams } from './person-service-interface';

export class PersonService implements IPersonService {
	public async create(data: PersonRequest, transaction?: Transaction): Promise<IPersonResponse> {
		return Person.create<Person>(data, { transaction });
	}

	public async update(id: number, data: PersonRequest): Promise<any> {
		return Person.update<Person>(data, { where: { id } });
	}

	public async findAll(): Promise<IPersonResponse[]> {
		return Person.findAll<Person>();
	}

	public async findOne({ query }: IFindParams): Promise<IPersonResponse> {
		return Person.findOne<Person>({ where: query });
	}

	public async findOrCreate({ query, data, transaction = null }: IFindOrCreateParams): Promise<any> {
		return Person.findOrCreate<Person>({ where: query, defaults: data, transaction });
	}

	public async deleteOne(id: number): Promise<any> {
		return Person.destroy({ where: { id } });
	}
}

export const personServiceInstance = new PersonService();
