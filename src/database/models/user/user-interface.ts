// Dependencies
import { Optional } from 'sequelize';

// Models
import { PersonCreationAttributes } from '../person/person-interface';

export interface UserRequest extends PersonCreationAttributes {
	password: string;
}

export interface UserModel {
	id: number;
	personId: number;
	password: string;
	ipAddress: string;
}

export type UserCreationAttributes = Optional<UserModel, 'id' | 'personId'>;
