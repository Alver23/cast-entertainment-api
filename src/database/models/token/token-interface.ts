// Dependencies
import { Optional } from 'sequelize';

export interface ITokenModel {
	id: number;
	userId: number;
	token: string;
}

export type TokenCreationAttributes = Optional<ITokenModel, 'id'>;
