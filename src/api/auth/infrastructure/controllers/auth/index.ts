// Dependencies
import passport from 'passport';
import { NextFunction, Request } from 'express';

// Interfaces
import { IAuthService } from '@api/auth/application/auth-service/interface';
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Strategies
import '@core/strategies/basic';

// Entities
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

export class AuthController {
	constructor(private readonly service: IAuthService) {}

	public async login(req: Request, res: ICustomResponse, next: NextFunction): Promise<any> {
		return (
			await passport.authenticate('basic', (error: any, user: IAuthUserEntity) => {
				if (error) {
					return next(error);
				}

				return req.login(user, { session: false }, async (errorLogin: any) => {
					if (errorLogin) {
						return next(errorLogin);
					}
					const response = await this.service.createToken(user);
					res.responseJson({ data: response });
				});
			})
		)(req, res, next);
	}

	public async refreshToken(req: Request, res: ICustomResponse): Promise<any> {
		const {
			body: { refreshToken },
		} = req;

		const response = await this.service.createTokenByRefreshToken(refreshToken);
		res.responseJson({ data: response });
	}
}
