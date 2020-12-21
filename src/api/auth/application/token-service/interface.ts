// Entities
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';
import { ITokenEntity } from '@api/auth/domain/entities/token';

export interface ITokenService {
	generateToken(user: IAuthUserEntity): string;
	generateRefreshToken(user: IAuthUserEntity): Promise<string>;
	getRefreshToken(refreshToken: string): Promise<ITokenEntity>;
	destroyToken(userId: number): Promise<any>;
}
