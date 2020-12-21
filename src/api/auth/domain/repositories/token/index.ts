// Entities
import { ITokenEntity } from '@api/auth/domain/entities/token';

export interface ITokenRepository {
	create(data: ITokenEntity): Promise<ITokenEntity>;
	destroy(userId: number): Promise<any>;
	getRefreshToken(refreshToken: string): Promise<ITokenEntity>;
}
