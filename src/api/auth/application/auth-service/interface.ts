// Entities
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

export interface ITokenResponse {
	token: string;
	refreshToken: string;
}
export interface IAuthService {
	login(email: string, password: string): Promise<IAuthUserEntity>;
	createToken(user: IAuthUserEntity): Promise<ITokenResponse>;
	createTokenByRefreshToken(refreshToken: string): Promise<any>;
}
