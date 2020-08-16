// Database
import { Person } from '@database/models/person';

// Interfaces
import { PersonRequest } from '@database/models/person/person-interface';
import { IPersonResponse, IPersonService } from './person-service-interface';

export class PersonService implements IPersonService {
	public async create(data: PersonRequest, transaction?: any): Promise<IPersonResponse> {
		return Person.create<Person>(data, { transaction });
	}

	public async update(id: number, data: PersonRequest): Promise<any> {
		return Person.update<Person>(data, { where: { id } });
	}

	public async findAll(): Promise<IPersonResponse[]> {
		return Person.findAll<Person>();
	}

	public async findOne({ query }): Promise<IPersonResponse> {
		return Person.findOne<Person>({ where: query });
	}

	public async findOrCreate({ query, data, transaction = null }): Promise<any> {
		return Person.findOrCreate<Person>({ where: query, defaults: data, transaction });
	}

	public async deleteOne(id: number): Promise<any> {
		return Person.destroy({ where: { id } });
	}
}

export const personServiceInstance = new PersonService();
