// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { Person } from '@database/models/person';
import { GroupPersonCreationAttributes, GroupPersonModel } from './interface';

// Models

export class GroupPerson extends Model<GroupPersonModel, GroupPersonCreationAttributes> implements GroupPersonModel {
	public id!: number;

	public groupId: number;

	public personId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

GroupPerson.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		personId: DataTypes.INTEGER.UNSIGNED,
		groupId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'groupPerson',
		tableName: 'group_has_person',
		underscored: true,
	},
);

GroupPerson.belongsTo(Person);
