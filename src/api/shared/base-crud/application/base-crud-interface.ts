// Interfaces
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export interface IBaseCrudService<T, U> {
	create(data: T): Promise<U>;
	delete(id: number | string): Promise<U>;
	getAll(): Promise<U[]>;
	getById({ query }: IQueryParams): Promise<U>;
	update(id: number | string, data: T): Promise<U>;
}
