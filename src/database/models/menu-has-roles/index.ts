// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interface
import { MenuHasRoleModel } from '@database/models/menu-has-roles/menu-has-role-interface';

export class MenuHasRole extends Model implements MenuHasRoleModel {
	public id!: number;

	public menuId!: number;

	public roleId!: number;
}

MenuHasRole.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		menuId: DataTypes.INTEGER.UNSIGNED,
		roleId: DataTypes.INTEGER.UNSIGNED,
	},
	{
		sequelize,
		modelName: 'MenuHasRole',
		tableName: 'menu_has_roles',
		underscored: true,
	},
);
