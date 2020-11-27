// Dependencies
import { Transaction } from 'sequelize';

// Shared
import {
	IBaseCrudRepository,
	IBaseModel,
	IFindOrCreateParams,
	IQueryParams,
} from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export abstract class BaseCrudRepository<K extends IBaseModel, T, U> implements IBaseCrudRepository<T, U> {
	constructor(private readonly model: K) {}

	create(data: T): Promise<U> {
		return this.model.create(data);
	}

	deleteOne(id: number | string): Promise<U> {
		return this.model.destroy({ where: { id } });
	}

	findAll(): Promise<U[]> {
		return this.model.findAll();
	}

	findOne({ query }: IQueryParams): Promise<U> {
		return this.model.findOne({ where: query });
	}

	findOrCreate({ query, data, transaction }: IFindOrCreateParams<T>): Promise<U> {
		return this.model.findOrCreate({ where: query, defaults: data, transaction });
	}

	updateOne(id: number | string, data: T): Promise<U> {
		return this.model.update(data, { where: { id } });
	}

	async updateOrCreate<T, W>(data: T, where?: W, transaction?: Transaction): Promise<U> {
		if (where) {
			const response = await this.model.findOne({ where });
			if (response) {
				await this.model.update(data, { where, transaction });
				return this.model.findOne({ where });
			}
		}

		return this.model.create(data, { transaction });
	}
}
