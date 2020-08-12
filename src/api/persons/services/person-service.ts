// Models
import { Person } from '../../../database/models/person';
import { IPersonService } from './person-service-interface';
import { PersonRequest } from '../../../database/models/person/person-interface';

export class PersonService implements IPersonService {
	private readonly attributes = [
		'first_name',
		'middle_name',
		'last_name',
		'email',
		'date_of_birth',
		'address',
		'city',
		'zip_code',
		'home_phone',
		'cell_phone',
	];

	public async create(data: PersonRequest): Promise<any> {
		return Person.create<Person>(data);
	}

	public async update(id: number, data: PersonRequest): Promise<any> {
		return Person.update<Person>(data, { where: { id } });
	}

	public async findAll(): Promise<any> {
		return Person.findAll<Person>({
			attributes: this.attributes,
		});
	}

	public async findOne({ query }): Promise<any> {
		return Person.findOne<Person>({
			attributes: this.attributes,
			where: query,
		});
	}

	public async deleteOne(id: number): Promise<any> {
		return Person.destroy({ where: { id } });
	}
}
