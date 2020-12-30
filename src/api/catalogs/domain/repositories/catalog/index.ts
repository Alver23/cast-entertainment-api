// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

export interface ICatalogRepository extends IBaseCrudRepository<ICatalogEntity, ICatalogEntity> {
	getByParentId(id: number, options: any): Promise<ICatalogEntity[]>;
}
