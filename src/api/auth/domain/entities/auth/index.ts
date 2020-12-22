export interface IAuthUserEntity {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	roles: string[];
}
