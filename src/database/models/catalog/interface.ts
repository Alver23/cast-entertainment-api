// Dependencies
import { Optional } from 'sequelize';

// Entities
import { ICatalogEntity } from '@api/catalogs/domain/entities/catalog';

export type CatalogModel = ICatalogEntity;
export type CatalogCreationAttributes = Optional<ICatalogEntity, 'id'>;
