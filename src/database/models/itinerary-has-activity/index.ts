// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { Activity } from '@database/models/activity';
import { ItineraryActivityCreationAttributes, ItineraryActivityModel } from './itinerary-activity-interface';

// Models

export class ItineraryHasActivity extends Model<ItineraryActivityModel, ItineraryActivityCreationAttributes>
	implements ItineraryActivityModel {
	public id!: number;

	public itineraryId: number;

	public activityId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

ItineraryHasActivity.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		itineraryId: DataTypes.INTEGER.UNSIGNED,
		activityId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'itineraryHasActivity',
		tableName: 'itinerary_has_activity',
		underscored: true,
	},
);

ItineraryHasActivity.belongsTo(Activity);
