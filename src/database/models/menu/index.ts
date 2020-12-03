// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { MenuModel, MenuCreationAttributes } from '@database/models/menu/menu-interface';

export class Menu extends Model<MenuModel, MenuCreationAttributes> implements MenuModel {
	public id!: number;

	public name: string;

	public description: string;

	public orden: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Menu.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		orden: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Menu',
		tableName: 'menu',
		underscored: true,
		paranoid: true,
		defaultScope: {
			order: [['orden', 'ASC']],
		},
	},
);
