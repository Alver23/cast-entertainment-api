export interface IBaseCrudService<T, U> {
	create(data: T): Promise<U>;
	delete(id: number | string): Promise<U>;
	getAll(page: number, limit: number, filters?: any): Promise<U[]>;
	getById(id: number | string): Promise<U>;
	update(id: number | string, data: T): Promise<U>;
}
