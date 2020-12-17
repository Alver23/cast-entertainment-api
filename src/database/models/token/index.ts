// Dependencies
import { Model, DataTypes } from 'sequelize';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Interfaces
import { User } from '@database/models/user';
import { ITokenModel, TokenCreationAttributes } from './token-interface';

// Databases Models

export class Token extends Model<ITokenModel, TokenCreationAttributes> {
	public id!: number;

	public userId!: number;

	public token!: string;
}

Token.init(
	{
		id: {
			type: DataTypes.INTEGER.UNSIGNED,
			autoIncrement: true,
			primaryKey: true,
		},
		token: DataTypes.STRING,
		userId: DataTypes.INTEGER.UNSIGNED,
	},
	{
		sequelize,
		modelName: 'Token',
		tableName: 'token',
		underscored: true,
		timestamps: false,
	},
);

Token.belongsTo(User, { as: 'user' });
