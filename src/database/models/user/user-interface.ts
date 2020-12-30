// Dependencies
import { Optional } from 'sequelize';

export interface UserModel {
	id: number;
	personId: number;
	password: string;
	ipAddress: string;
}

export type UserCreationAttributes = Optional<UserModel, 'id' | 'personId'>;
