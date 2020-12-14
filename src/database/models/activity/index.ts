// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { ActivityCreationAttributes, ActivityModel } from './activity-interface';

export class Activity extends Model<ActivityModel, ActivityCreationAttributes> implements ActivityModel {
	public id!: number;

	public name: string;

	public description: string;

	public date: Date;

	public startTime: string;

	public endTime: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Activity.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		date: DataTypes.DATEONLY,
		startTime: DataTypes.TIME,
		endTime: DataTypes.TIME,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'activity',
		tableName: 'activity',
		underscored: true,
	},
);
