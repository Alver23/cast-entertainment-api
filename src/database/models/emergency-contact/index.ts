// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { EmergencyContactModel, EmergencyContactCreationAttributes } from '@database/models/emergency-contact/emergency-contact-interface';

export class EmergencyContact extends Model<EmergencyContactModel, EmergencyContactCreationAttributes> implements EmergencyContactModel {
	public id!: number;

	public personId!: number;

	public relationshipId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;
}

EmergencyContact.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		personId: DataTypes.INTEGER.UNSIGNED,
		relationshipId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'EmergencyContact',
		tableName: 'emergency_contacts',
		underscored: true,
		paranoid: true,
	},
);
