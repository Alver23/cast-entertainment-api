// Interfaces
import { IRole } from './models/role/role-interface';

export interface IUserAuth {
	id: number;
	firstName: string;
	lastName: string;
	dateOfBirth: string;
	address: string;
	email: string;
	roles: IRole[];
	menus: any;
}

export interface IGetUserResponse extends IUserAuth {
	password: string;
}

export interface IRefreshTokenResponse {
	user: IUserAuth;
	refreshToken: string;
	token: string;
}

export interface IAuthService {
	getUser(email: string): Promise<any>;
	createToken(user): string;
	generateRefreshToken(user): Promise<any>;
	refreshToken(token: string): any;
}
