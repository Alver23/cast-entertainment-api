// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '../../../core/sequelize/sequelize';

// Models
import { UserModel, UserCreationAttributes } from './user-interface';
import { Person } from '../person';

export class User extends Model<UserModel, UserCreationAttributes> implements UserModel {
	public id!: number;

	public personId!: number;

	public password: string;

	public ipAddress: string;

	// timestamps!
	public readonly createdAt!: Date;

	public readonly updatedAt!: Date;

	public readonly deletedAt!: Date;

	public readonly person: Person;
}

User.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		personId: DataTypes.INTEGER.UNSIGNED,
		password: DataTypes.STRING,
		ipAddress: DataTypes.STRING,
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'users',
		underscored: true,
		paranoid: true,
		defaultScope: {
			attributes: {
				exclude: ['password', 'PersonId'],
			},
		},
	},
);

Person.hasOne(User);
User.belongsTo(Person, { as: 'person' });
