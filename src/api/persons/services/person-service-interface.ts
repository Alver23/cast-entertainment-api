// Interfaces
import { PersonModel, PersonRequest } from '@database/models/person/person-interface';

export type IPersonResponse = PersonModel;

export interface IPersonService {
	findAll(): Promise<IPersonResponse[]>;
	findOne({ query }): Promise<IPersonResponse>;
	findOrCreate({ query, data, transaction }): Promise<any>;
	create(data: PersonRequest, transaction?: any): Promise<IPersonResponse>;
	update(id: number, data: PersonRequest): Promise<any>;
	deleteOne(id: number): Promise<any>;
}
