// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Utils
import { objectToClass } from '@utils/plain-tranformer';

import { PaginatorDto } from './dto/paginator';

export abstract class BaseCrudService<T, U, R extends IBaseCrudRepository<T, U>> implements IBaseCrudService<T, U> {
	protected schemaItem;

	protected schemaItems;

	constructor(protected readonly repository: R) {}

	protected hasClassTransformer(schema: any, data: any): any {
		return schema ? objectToClass<T, U>(schema, data) : data;
	}

	async create(data: T): Promise<U> {
		return this.repository.create(data);
	}

	async delete(id: number | string): Promise<U> {
		return this.repository.deleteOne(+id);
	}

	async getAll(page: number | string, limit: number | string, filters: any): Promise<U[]> {
		const response: any = await this.repository.findAll({ page, limit, filters });
		const collection = this.hasClassTransformer(PaginatorDto, response);
		collection.items = this.hasClassTransformer(this.schemaItems, response.items);
		return collection;
	}

	async getById(id: number | string): Promise<U> {
		const response: any = await this.repository.findOne({ query: { id: +id } });
		return this.hasClassTransformer(this.schemaItem, response);
	}

	async update(id: number | string, data: T): Promise<U> {
		return this.repository.updateOne(+id, data);
	}
}
