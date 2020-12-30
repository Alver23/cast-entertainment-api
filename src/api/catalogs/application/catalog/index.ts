// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

// Interfaces
import { ICatalogRepository } from '@api/catalogs/domain/repositories/catalog';
import { ICatalogService } from '@api/catalogs/application/catalog/interface';

// Dto's
import { PaginatorDto } from '@api/shared/base-crud/application/dto/paginator';
import { CatalogListDto } from './dto/catalog-list';
import { CatalogItemDto } from './dto/catalog-item';

export class CatalogService extends BaseCrudService<ICatalogEntity, ICatalogEntity, ICatalogRepository> implements ICatalogService {
	protected schemaItem = CatalogItemDto;

	protected schemaItems = CatalogListDto;

	constructor(repository: ICatalogRepository) {
		super(repository);
	}

	async getByParentId(id: number, page: number, limit: number, filters: any): Promise<ICatalogEntity[]> {
		const response: any = await this.repository.getByParentId(id, { page, limit, filters });
		const collection = this.hasClassTransformer(PaginatorDto, response);
		collection.items = this.hasClassTransformer(this.schemaItems, response.items);
		return collection;
	}
}
