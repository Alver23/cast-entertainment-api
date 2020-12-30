// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { CatalogModel, CatalogCreationAttributes } from '@database/models/catalog/interface';

export class Catalog extends Model<CatalogModel, CatalogCreationAttributes> implements CatalogModel {
	public id!: number;

	public parentId!: number;

	public name: string;

	public description: string;

	public orden: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Catalog.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		parentId: DataTypes.INTEGER.UNSIGNED,
		description: DataTypes.STRING,
		orden: DataTypes.TINYINT,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Catalog',
		tableName: 'catalog',
		underscored: true,
		paranoid: true,
	},
);

Catalog.belongsTo(Catalog, { foreignKey: 'parentId' });
