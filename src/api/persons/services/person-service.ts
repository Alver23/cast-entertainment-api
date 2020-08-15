// Models
import { Person } from '../../../database/models/person';
import { IPersonService } from './person-service-interface';
import { PersonRequest } from '../../../database/models/person/person-interface';

export class PersonService implements IPersonService {
	public async create(data: PersonRequest, transaction?: any): Promise<any> {
		return Person.create<Person>(data, { transaction });
	}

	public async update(id: number, data: PersonRequest): Promise<any> {
		return Person.update<Person>(data, { where: { id } });
	}

	public async findAll(): Promise<any> {
		return Person.findAll<Person>();
	}

	public async findOne({ query }): Promise<any> {
		return Person.findOne<Person>({ where: query });
	}

	public async findOrCreate({ query, data, transaction = null }) {
		return Person.findOrCreate<Person>({ where: query, defaults: data, transaction });
	}

	public async deleteOne(id: number): Promise<any> {
		return Person.destroy({ where: { id } });
	}
}

export const personServiceInstance = new PersonService();
