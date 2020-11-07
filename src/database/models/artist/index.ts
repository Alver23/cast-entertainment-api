// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Person } from '@database/models/person';
import { ArtistHasPassport } from '@database/models/artist-has-passport';
import { ArtistHasEmergencyContact } from '@database/models/artist-has-emergency-contact';
import { ArtistHasBeneficiary } from '@database/models/artist-has-beneficiary';
import { ArtistHasSkill } from '@database/models/artist-has-skills';
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

Person.hasOne(Artist);
Artist.belongsTo(Person, { as: 'person' });
Artist.hasOne(ArtistHasPassport, { as: 'passport' });
Artist.hasOne(ArtistHasEmergencyContact, { as: 'emrgencyContact' });
Artist.hasMany(ArtistHasBeneficiary, { as: 'beneficiaries' });
Artist.hasMany(ArtistHasSkill, { as: 'skills' });
