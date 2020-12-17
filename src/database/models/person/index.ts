// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { Catalog } from '@database/models/catalog';
import { PersonModel, PersonCreationAttributes } from './person-interface';

export class Person extends Model<PersonModel, PersonCreationAttributes> implements PersonModel {
	public id!: number;

	public firstName: string;

	public lastName: string;

	public email: string;

	public dateOfBirth?: Date;

	public address?: string;

	public city?: string;

	public cellPhone?: string;

	public gender?: number;

	public documentType?: number;

	public documentNumber?: number;

	public height?: number;

	public countryId: number;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;
}

Person.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		firstName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		dateOfBirth: DataTypes.DATEONLY,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		cellPhone: DataTypes.STRING,
		gender: DataTypes.NUMBER,
		documentType: DataTypes.NUMBER,
		documentNumber: DataTypes.NUMBER,
		height: DataTypes.NUMBER,
		countryId: DataTypes.INTEGER.UNSIGNED,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Person',
		tableName: 'people',
		underscored: true,
		defaultScope: {
			order: [['createdAt', 'DESC']],
			include: 'document',
		},
	},
);

Person.belongsTo(Catalog, { foreignKey: 'documentType', as: 'document' });
