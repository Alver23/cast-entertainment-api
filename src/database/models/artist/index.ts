// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { ArtistModel, ArtistCreationAttributes } from './artist-interface';

export class Artist extends Model<ArtistModel, ArtistCreationAttributes> implements ArtistModel {
	public id!: number;

	public personId!: number;

	public nativeLanguage?: number;

	public otherLanguage?: number;

	public fullNamesFather?: string;

	public fullNamesMother?: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

Artist.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		personId: DataTypes.INTEGER.UNSIGNED,
		nativeLanguage: DataTypes.INTEGER.UNSIGNED,
		otherLanguage: DataTypes.INTEGER.UNSIGNED,
		fullNamesFather: DataTypes.STRING,
		fullNamesMother: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Artist',
		tableName: 'artists',
		underscored: true,
		paranoid: true,
	},
);
