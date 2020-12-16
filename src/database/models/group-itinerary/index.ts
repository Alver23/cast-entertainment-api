// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { Itinerary } from '@database/models/itinerary';
import { GroupItineraryCreationAttributes, GroupItineraryModel } from './interface';

// Models

// Models

export class GroupItinerary extends Model<GroupItineraryModel, GroupItineraryCreationAttributes> implements GroupItineraryModel {
	public id!: number;

	public itineraryId: number;

	public groupId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

GroupItinerary.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		itineraryId: DataTypes.INTEGER.UNSIGNED,
		groupId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'groupItinerary',
		tableName: 'group_has_itinerary',
		underscored: true,
	},
);

GroupItinerary.belongsTo(Itinerary);
