// Dependencies
import { Transaction } from 'sequelize';

export interface IQueryParams {
	query: {
		[key: string]: any;
	};
	options?: any;
}

export interface IFindOrCreateParams<T> {
	query: {
		[key: string]: number | string | boolean;
	};
	data: T;
	transaction?: Transaction;
}

export interface IBaseCrudRepository<T, U> {
	create(data: T): Promise<U>;
	deleteOne(id: number | string): Promise<U>;
	findAll(): Promise<U[]>;
	findOne({ query }: IQueryParams): Promise<U>;
	findOrCreate({ query, data }: IFindOrCreateParams<T>): Promise<U>;
	updateOne(id: number | string, data: T): Promise<U>;
}

export interface IBaseModel {
	create(values: any, attributes?: any): Promise<any>;
	destroy(options: any): Promise<any>;
	findAll(): Promise<any>;
	findOne(options: any): Promise<any>;
	findOrCreate(options: any): Promise<any>;
	update(values: any, attributes?: any): Promise<any>;
}
