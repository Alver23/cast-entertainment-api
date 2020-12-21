// Dependencies
import { compare } from 'bcrypt';

// Repository
import { IAuthRepository } from '@api/auth/domain/repositories/auth';

// Exceptions
import { UnauthorizedException } from '@api/auth/domain/exceptions/auth';

// Dto's
import { objectToClass } from '@utils/plain-tranformer';
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';
import { UserDto } from './dto/user';

// Utils

// Interfaces
import { ITokenService } from '../token-service/interface';
import { IAuthService, ITokenResponse } from './interface';

// Entities

export class AuthService implements IAuthService {
	constructor(private readonly repository: IAuthRepository, private readonly tokenService: ITokenService) {}

	async getUser(email: string, groups = ['verify']): Promise<IAuthUserEntity> {
		const person: any = await this.repository.findUserByEmail(email);
		const user: any = await person.getUser();
		const personValues = person.toJSON();
		const userValues = user.toJSON();
		const roles = await user.getRoles();
		const data = {
			...personValues,
			...userValues,
			roles,
		};
		return objectToClass(UserDto, data, { groups });
	}

	async login(email: string, password: string): Promise<any> {
		const user = await this.getUser(email, ['authenticate']);
		const { password: userPassword, ...userValues } = user;
		if (!(await compare(password, userPassword))) {
			throw new UnauthorizedException();
		}
		return userValues;
	}

	async createToken(user: IAuthUserEntity): Promise<ITokenResponse> {
		const token = this.tokenService.generateToken(user);
		const refreshToken = await this.tokenService.generateRefreshToken(user);
		return { token, refreshToken };
	}

	async createTokenByRefreshToken(refreshToken: string): Promise<any> {
		const response: any = await this.tokenService.getRefreshToken(refreshToken);
		if (!response) {
			throw new UnauthorizedException();
		}
		const { user } = response;
		const { id } = user.toJSON();
		const roles = await user.getRoles();
		const person = await user.getPerson();
		const payload: IAuthUserEntity = objectToClass(UserDto, {
			...person,
			id,
			roles,
		});
		await this.tokenService.destroyToken(id);
		return this.createToken(payload);
	}
}
