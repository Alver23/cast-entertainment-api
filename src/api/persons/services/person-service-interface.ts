// Models
import { PersonRequest } from '../../../database/models/person/person-interface';

export interface IPersonService {
	findAll();
	findOne({ query });
	findOrCreate({ query, data, transaction });
	create(data: PersonRequest, transaction?: any);
	update(id: number, data: PersonRequest);
	deleteOne(id: number);
}
