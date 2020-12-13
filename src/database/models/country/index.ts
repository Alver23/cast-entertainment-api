// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { CountryModel, CountryCreationAttributes } from '@database/models/country/country-interface';

export class Country extends Model<CountryModel, CountryCreationAttributes> implements CountryModel {
	public id!: number;

	public name: string;

	public description?: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Country.init(
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
		modelName: 'Country',
		tableName: 'country',
		paranoid: true,
	},
);
