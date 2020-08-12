// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '../../../core/sequelize/sequelize';

// Models
import { PersonModel } from './person-interface';

export class Person extends Model<PersonModel> {
	public id!: number;

	public firstName: string;

	public middleName: string;

	public lastName: string;

	public email: string;

	public dateOfBirth?: string;

	public address?: string;

	public city?: string;

	public ziCode?: string;

	public homePhone?: string;

	public cellPhone?: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt?: Date;
}

Person.init(
	{
		firstName: DataTypes.STRING,
		middleName: DataTypes.STRING,
		lastName: DataTypes.STRING,
		email: DataTypes.STRING,
		dateOfBirth: DataTypes.DATE,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		zipCode: DataTypes.STRING,
		homePhone: DataTypes.STRING,
		cellPhone: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'Person',
		tableName: 'people',
		underscored: true,
		paranoid: true,
	},
);
