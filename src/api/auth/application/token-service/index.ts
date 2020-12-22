// Dependencies
import { sign } from 'jsonwebtoken';
import { uid } from 'rand-token';

// Entities
import { ITokenEntity } from '@api/auth/domain/entities/token';
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

// Repositories
import { ITokenRepository } from '@api/auth/domain/repositories/token';

// Interfaces
import { ITokenService } from '@api/auth/application/token-service/interface';

// Config
import { config } from '@config/index';

export class TokenService implements ITokenService {
	constructor(private readonly repository: ITokenRepository) {}

	public generateToken(user: IAuthUserEntity): string {
		const { secret, expires } = config.jwt;
		const { id, ...userValues } = user;
		const payload = {
			sub: id,
			...userValues,
		};

		return sign(payload, secret, { expiresIn: expires });
	}

	public async generateRefreshToken(user: IAuthUserEntity): Promise<string> {
		const { id: userId } = user;
		const refreshToken = uid(256);
		await this.destroyToken(userId);
		await this.repository.create({ token: refreshToken, userId });
		return refreshToken;
	}

	public async getRefreshToken(refreshToken: string): Promise<ITokenEntity> {
		return this.repository.getRefreshToken(refreshToken);
	}

	public async destroyToken(userId: number): Promise<any> {
		return this.repository.destroy(userId);
	}
}
