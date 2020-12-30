// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Models
import { Catalog } from '@database/models/catalog';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

// Repositories
import { ICatalogRepository } from '@api/catalogs/domain/repositories/catalog';

export class CatalogRepository extends BaseCrudRepository<typeof Catalog, ICatalogEntity, ICatalogEntity> implements ICatalogRepository {
	constructor() {
		super(Catalog);
	}

	async getByParentId(id: number, options: any): Promise<ICatalogEntity[]> {
		const buildOptions = {
			...options,
			where: { parentId: id },
			order: [['orden', 'ASC']],
		};
		return super.findAll(buildOptions);
	}
}
