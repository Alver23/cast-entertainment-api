// Dependencies
import { Transaction, EmptyResultError } from 'sequelize';

// Shared
import {
	IBaseCrudRepository,
	IBaseModel,
	IFindOrCreateParams,
	IQueryParams,
} from '@api/shared/base-crud/domain/repositories/base-crud-repository';

import { entityUtils } from '@api/shared/base-crud/infrastructure/persistence/mysql/utils/entity';

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

	async findOne({ query, options = {} }: IQueryParams): Promise<U> {
		return entityUtils.findEntityOrThrow(this.model, query, options);
	}

	findOrCreate({ query, data, transaction }: IFindOrCreateParams<T>): Promise<U> {
		return this.model.findOrCreate({ where: query, defaults: data, transaction });
	}

	updateOne(id: number | string, data: T): Promise<U> {
		return this.model.update(data, { where: { id } });
	}

	async updateOrCreate<T, W>(data: T, where?: W, transaction?: Transaction): Promise<U> {
		if (where) {
			await entityUtils.findEntityOrThrow(this.model, where);
			await this.model.update(data, { where, transaction });
			return this.model.findOne({ where });
		}

		return this.model.create(data, { transaction });
	}
}
