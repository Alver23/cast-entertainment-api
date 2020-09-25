// Dependencies
import { unauthorized } from '@hapi/boom';
import { sign } from 'jsonwebtoken';
import { uid } from 'rand-token';

// Interfaces
import { IPersonService, personServiceInstance } from '@api/persons/services';

// Config
import { config } from '@config/index';

// Services
import { userServiceInstance, IUserService } from '@api/users/services';

// Database Models
import { Token } from '@database/models/token';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';
import { IAuthService, IGetUserResponse, IRefreshTokenResponse, IUserAuth } from './auth-service-interface';

// Models
import { RoleMapper } from './models/role/role-mapper';

export class AuthService implements IAuthService {
	constructor(private readonly userService: IUserService, private readonly personService: IPersonService) {}

	private ramdonToken(): string {
		return uid(256);
	}

	public async getUser(email: string): Promise<IGetUserResponse> {
		const personModel: any = await this.personService.findOne({ query: { email } });
		const { firstName, middleName, lastName, dateOfBirth, address, email: personEmail } = personModel;

		if (!personEmail) {
			return null;
		}

		const user: any = await personModel.getUser();
		const { id, password } = user;
		const roles = await user.getRoles();
		const roleMapper = new RoleMapper(roles || []);
		const userRoles = await roleMapper.getRoles();
		const userMenus = roleMapper.getMenus();

		return {
			id,
			firstName,
			middleName,
			lastName,
			dateOfBirth,
			address,
			password,
			email: personEmail,
			roles: userRoles,
			menus: userMenus,
		};
	}

	public createToken(user: IUserAuth): string {
		const { secret, expires } = config.jwt;
		const { id } = user;
		const payload = {
			sub: id,
			...user,
		};

		return sign(payload, secret, { expiresIn: expires });
	}

	public async generateRefreshToken(user: IUserAuth): Promise<string> {
		const { id: userId } = user;
		const token = this.ramdonToken();
		await Token.create<Token>({ token, userId });
		return token;
	}

	public async refreshToken(token: string): Promise<IRefreshTokenResponse> {
		const response: any = await Token.findOne({ where: { token }, include: ['user'] });
		if (!response) {
			throw unauthorized(HttpMessages.UNAUTHORIZED);
		}

		const { user } = response;
		const { firstName, middleName, lastName, dateOfBirth, address, email } = await user.getPerson();
		const { id } = user.toJSON();
		const roles = await user.getRoles();
		const roleMapper = new RoleMapper(roles || []);
		const userRoles = await roleMapper.getRoles();
		const userMenus = roleMapper.getMenus();

		const payload = {
			id,
			firstName,
			middleName,
			lastName,
			dateOfBirth,
			address,
			email,
			roles: userRoles,
			menus: userMenus,
		};
		await Token.destroy({ where: { userId: id } });
		const newToken = this.createToken(payload);
		const refreshToken = await this.generateRefreshToken(payload);
		return { user: payload, refreshToken, token: newToken };
	}
}

export const authServiceInstance = new AuthService(userServiceInstance, personServiceInstance);
