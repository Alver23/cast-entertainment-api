// Dependencies
import { Transaction } from 'sequelize';

// Interfaces
import { PersonModel, PersonRequest } from '@database/models/person/person-interface';

export type IPersonResponse = PersonModel;

export interface IFindParams {
	query: {
		[key: string]: any;
	};
}

export interface IFindOrCreateParams {
	query: {
		[key: string]: any;
	};
	data: PersonRequest;
	transaction: Transaction;
}

export interface IPersonService {
	findAll(): Promise<IPersonResponse[]>;
	findOne({ query }: IFindParams): Promise<IPersonResponse>;
	findOrCreate({ query, data, transaction }: IFindOrCreateParams): Promise<any>;
	create(data: PersonRequest, transaction?: Transaction): Promise<IPersonResponse>;
	update(id: number, data: PersonRequest): Promise<any>;
	deleteOne(id: number): Promise<any>;
}
