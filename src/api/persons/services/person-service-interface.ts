// Models
import { PersonRequest } from '../../../database/models/person/person-interface';

export interface IPersonService {
	findAll();
	findOne({ query });
	create(data: PersonRequest);
	update(id: number, data: PersonRequest);
	deleteOne(id: number);
}
