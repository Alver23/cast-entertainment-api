// Dependencies
import { Transaction } from 'sequelize';

// Shared
import {
	IBaseCrudRepository,
	IBaseModel,
	IFindOrCreateParams,
	IQueryParams,
} from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Utils
import { entityUtils } from '@api/shared/base-crud/infrastructure/persistence/mysql/utils/entity';
import { paginator } from '@api/shared/base-crud/infrastructure/persistence/mysql/utils/paginator';

export abstract class BaseCrudRepository<K extends IBaseModel, T, U> implements IBaseCrudRepository<T, U> {
	constructor(protected readonly model: K) {}

	create(data: T, options = {}): Promise<U> {
		return this.upsert(data, null, options);
	}

	deleteOne(id: number | string): Promise<U> {
		return this.model.destroy({ where: { id } });
	}

	async findAll(options: any = {}): Promise<U[]> {
		const { page, limit: size, ...otherValues } = options;
		const { offset, limit } = paginator.getPagination(page, size);
		const buildOptions = {
			...otherValues,
			limit,
			offset,
		};
		const response = await this.model.findAndCountAll(buildOptions);
		return paginator.getPagingData(response, offset, limit) as any;
	}

	async findOne({ query, options = {} }: IQueryParams): Promise<U> {
		return entityUtils.findEntityOrThrow(this.model, query, options);
	}

	findOrCreate({ query, data, transaction }: IFindOrCreateParams<T>): Promise<U> {
		return this.model.findOrCreate({ where: query, defaults: data, transaction });
	}

	async updateOne(id: number, data: T): Promise<U> {
		return this.upsert(data, id);
	}

	async updateOrCreate<T, W>(data: T, where?: W, transaction?: Transaction): Promise<U> {
		if (where) {
			await entityUtils.findEntityOrThrow(this.model, where);
			await this.model.update(data, { where, transaction });
			return this.model.findOne({ where });
		}

		return this.model.create(data, { transaction });
	}

	async upsert(data: T, id?: number, options = {}): Promise<U> {
		if (id) {
			const query = { id };
			await entityUtils.findEntityOrThrow(this.model, query, options);
			await this.model.update(data, { where: query });
			return this.model.findOne({ where: query, ...options });
		}
		return this.model.create(data, options);
	}
}
