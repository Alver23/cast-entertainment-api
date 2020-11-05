// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import {
	ArtistHasBeneficiaryCreationAttributes,
	ArtistHasBeneficiaryModel,
} from '@database/models/artist-has-beneficiary/artist-has-beneficiary-interface';

export class ArtistHasBeneficiary extends Model<ArtistHasBeneficiaryModel, ArtistHasBeneficiaryCreationAttributes>
	implements ArtistHasBeneficiaryModel {
	public id!: number;

	public artistId!: number;

	public personId!: number;

	public percentage: number;

	public relationshipId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

ArtistHasBeneficiary.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		artistId: DataTypes.INTEGER.UNSIGNED,
		personId: DataTypes.INTEGER.UNSIGNED,
		percentage: DataTypes.DECIMAL(10, 2),
		relationshipId: DataTypes.INTEGER.UNSIGNED,
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
