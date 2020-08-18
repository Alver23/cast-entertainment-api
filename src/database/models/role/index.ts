// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { RoleModel, RoleCreationAttributes } from '@database/models/role/role-interface';

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
		tableName: 'roles',
		underscored: true,
		paranoid: true,
		defaultScope: {
			order: [['createdAt', 'DESC']],
		},
	},
);
