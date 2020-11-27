// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

export class Catalog extends Model {
	public id!: number;

	public parentId!: number;

	public name: string;

	public description: string;

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
	},
	{
		sequelize,
		modelName: 'Catalog',
		tableName: 'catalogs',
		underscored: true,
		paranoid: true,
	},
);

Catalog.belongsTo(Catalog, { foreignKey: 'parentId' });
