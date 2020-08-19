// Interfaces
import { IRole } from './models/role/role-interface';

export interface IUser {
	id: number;
	firstName: string;
	middleName: string;
	lastName: string;
	dateOfBirth: string;
	address: string;
	email: string;
	roles: IRole[];
}

export interface IGetUserResponse extends IUser {
	password: string;
}

export interface IRefreshTokenResponse {
	user: IUser;
	refreshToken: string;
	token: string;
}

export interface IAuthService {
	getUser(email: string): Promise<any>;
	createToken(user): string;
	generateRefreshToken(user): Promise<any>;
	refreshToken(token: string): any;
}
