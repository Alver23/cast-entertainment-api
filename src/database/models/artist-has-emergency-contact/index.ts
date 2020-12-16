// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { ArtistHasEmergencyContactModel } from '@database/models/artist-has-emergency-contact/artist-has-emergency-contact-interface';
import { EmergencyContact } from '@database/models/emergency-contact';

export class ArtistHasEmergencyContact extends Model implements ArtistHasEmergencyContactModel {
	public id!: number;

	public artistId!: number;

	public emergencyContactId!: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

ArtistHasEmergencyContact.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		artistId: DataTypes.INTEGER.UNSIGNED,
		emergencyContactId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'ArtistHasEmergencyContact',
		tableName: 'artist_has_emergency_contact',
		underscored: true,
		defaultScope: {
			include: 'emergencyContact',
		},
	},
);

ArtistHasEmergencyContact.belongsTo(EmergencyContact, { as: 'emergencyContact' });
