// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Role } from '@database/models/role';
import { UserHasRole } from '@database/models/user-has-roles';
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
			include: ['person', 'roles'],
			order: [['createdAt', 'DESC']],
		},
	},
);

Person.hasOne(User);
User.belongsTo(Person, { as: 'person' });
User.belongsToMany(Role, { through: UserHasRole, as: 'roles' });
Role.belongsToMany(User, { through: UserHasRole });
