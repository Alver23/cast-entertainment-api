// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export abstract class BaseCrudService<T, U> implements IBaseCrudService<T, U> {
	constructor(private readonly repository: IBaseCrudRepository<T, U>) {}

	async create(data: T): Promise<U> {
		return this.repository.create(data);
	}

	async delete(id: number | string): Promise<U> {
		return this.repository.deleteOne(+id);
	}

	async getAll(): Promise<U[]> {
		return this.repository.findAll();
	}

	async getById(id: number | string): Promise<U> {
		return this.repository.findOne({ query: { id: +id } });
	}

	async update(id: number | string, data: T): Promise<U> {
		return this.repository.updateOne(+id, data);
	}
}
