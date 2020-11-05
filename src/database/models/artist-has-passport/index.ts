// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import {
	ArtistHasPassportModel,
	ArtistHasPassportCreationAttributes,
} from '@database/models/artist-has-passport/artist-has-passport-interface';

export class ArtistHasPassport extends Model<ArtistHasPassportModel, ArtistHasPassportCreationAttributes>
	implements ArtistHasPassportModel {
	public id!: number;

	public artistId!: number;

	public number: string;

	public dateOfIssue: string;

	public expirationDate: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

ArtistHasPassport.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		artistId: DataTypes.INTEGER.UNSIGNED,
		number: DataTypes.STRING,
		dateOfIssue: DataTypes.STRING,
		expirationDate: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'ArtistHasPassport',
		tableName: 'artist_has_passport',
		underscored: true,
		paranoid: true,
	},
);
