// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { RoleModel, RoleCreationAttributes } from '@database/models/role/role-interface';

// Models
import { Menu } from '@database/models/menu';
import { MenuHasRole } from '@database/models/menu-has-roles';

export class Role extends Model<RoleModel, RoleCreationAttributes> implements RoleModel {
	public id!: number;

	public name: string;

	public description: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Role.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Role',
		tableName: 'role',
		underscored: true,
		defaultScope: {
			order: [['createdAt', 'DESC']],
		},
	},
);

Role.belongsToMany(Menu, { through: MenuHasRole, as: 'menus' });
