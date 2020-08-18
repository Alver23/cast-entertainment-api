// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interface
import { UserHasRoleModel } from '@database/models/user-has-roles/user-has-role-interface';

export class UserHasRole extends Model implements UserHasRoleModel {
	public id!: number;

	public userId!: number;

	public roleId!: number;
}

UserHasRole.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		userId: DataTypes.INTEGER.UNSIGNED,
		roleId: DataTypes.INTEGER.UNSIGNED,
	},
	{
		sequelize,
		modelName: 'UserHasRole',
		tableName: 'user_has_roles',
		underscored: true,
		paranoid: true,
	},
);
