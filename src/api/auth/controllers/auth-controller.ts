// Dependencies
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { CREATED } from 'http-status-codes';
import { NextFunction, Response, Request } from 'express';

// Services
import { authServiceInstance, IAuthService, IUser } from '@api/auth/services';

// Utils
import { setResponse } from '@utils/set-response/set-response';
import { HttpMessages } from '@utils/messages/http-messages';

// Strategies
import '@core/strategies/basic';

export class AuthController {
	constructor(private readonly authService: IAuthService) {}

	public async login(req: Request, res: Response, next: NextFunction): Promise<any> {
		return passport.authenticate('basic', (error: any, user: IUser) => {
			if (error || !user) {
				return next(unauthorized(HttpMessages.UNAUTHORIZED));
			}

			return req.login(user, { session: false }, async (errorLogin: any) => {
				if (errorLogin) {
					return next(errorLogin);
				}
				const token = this.authService.createToken(user);
				const refreshToken = await this.authService.generateRefreshToken(user);
				res.json(
					setResponse({
						data: { user, token, refreshToken },
					}),
				);
			});
		})(req, res, next);
	}

	public async refreshToken(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				body: { refreshToken },
			} = req;
			const data = await this.authService.refreshToken(refreshToken);
			const response = setResponse({ data: { ...data }, status: CREATED });
			res.status(response.status).json(response);
		} catch (e) {
			next(e);
		}
	}
}

export const authController = new AuthController(authServiceInstance);
