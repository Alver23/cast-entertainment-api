// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { ItineraryHasActivity } from '@database/models/itinerary-has-activity';

// Interfaces
import { ItineraryCreationAttributes, ItineraryModel } from './itinerary-interface';

export class Itinerary extends Model<ItineraryModel, ItineraryCreationAttributes> implements ItineraryModel {
	public id!: number;

	public name: string;

	public description: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Itinerary.init(
	{
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER.UNSIGNED,
		},
		name: DataTypes.STRING,
		description: DataTypes.TEXT,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'itinerary',
		tableName: 'itinerary',
		underscored: true,
	},
);

Itinerary.hasMany(ItineraryHasActivity);
ItineraryHasActivity.belongsTo(Itinerary);
