// Domain
import { ITokenRepository } from '@api/auth/domain/repositories/token';
import { ITokenEntity } from '@api/auth/domain/entities/token';

// Models
import { Token } from '@database/models/token';

export class TokenRepository implements ITokenRepository {
	create(data: ITokenEntity): Promise<ITokenEntity> {
		return Token.create<Token>(data);
	}

	destroy(userId: number): Promise<any> {
		return Token.destroy({ where: { userId } });
	}

	getRefreshToken(refreshToken: string): Promise<ITokenEntity> {
		return Token.findOne({ where: { token: refreshToken }, include: ['user'] });
	}
}
