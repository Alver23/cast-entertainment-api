// Dependencies
import { Transaction } from 'sequelize';

// Shared
import {
	IBaseCrudRepository,
	IBaseModel,
	IFindOrCreateParams,
	IQueryParams,
} from '@api/shared/base-crud/domain/repositories/base-crud-repository';

import { entityUtils } from '@api/shared/base-crud/infrastructure/persistence/mysql/utils/entity';

export abstract class BaseCrudRepository<K extends IBaseModel, T, U> implements IBaseCrudRepository<T, U> {
	constructor(protected readonly model: K) {}

	create(data: T, options = {}): Promise<U> {
		return this.model.create(data, options);
	}

	deleteOne(id: number | string): Promise<U> {
		return this.model.destroy({ where: { id } });
	}

	findAll(options = {}): Promise<U[]> {
		return this.model.findAll(options);
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
