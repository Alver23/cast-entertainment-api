// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces

// Models
import { GroupItinerary } from '@database/models/group-itinerary';
import { GroupPerson } from '@database/models/group-person';
import { GroupCreationAttributes, GroupModel } from './interface';

export class Group extends Model<GroupModel, GroupCreationAttributes> implements GroupModel {
	public id!: number;

	public name: string;

	public description: string;

	public state: boolean;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Group.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		state: DataTypes.BOOLEAN,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'group',
		tableName: 'group',
		underscored: true,
	},
);

Group.hasMany(GroupItinerary);
Group.hasMany(GroupPerson);
