// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '../../../core/sequelize/sequelize';

// Models
import { PersonModel } from './person-interface';

export class Person extends Model<PersonModel> {
	public id!: number;

	public first_name: string;

	public middle_name: string;

	public last_name: string;

	public email: string;

	public date_of_birth?: Date;

	public address?: string;

	public city?: string;

	public zip_code?: string;

	public home_phone?: string;

	public cell_phone?: string;

	// timestamps!
	public readonly created_at!: Date;

	public readonly updated_at!: Date;

	public readonly deleted_at?: Date;
}

Person.init(
	{
		first_name: DataTypes.STRING,
		middle_name: DataTypes.STRING,
		last_name: DataTypes.STRING,
		email: DataTypes.STRING,
		date_of_birth: DataTypes.DATE,
		address: DataTypes.STRING,
		city: DataTypes.STRING,
		zip_code: DataTypes.STRING,
		home_phone: DataTypes.STRING,
		cell_phone: DataTypes.STRING,
		ip_address: DataTypes.STRING,
		deleted_at: DataTypes.DATE,
	},
	{
		sequelize,
		modelName: 'Person',
	},
);
