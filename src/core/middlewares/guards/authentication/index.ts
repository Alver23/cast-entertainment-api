// Dependencies
import passport from 'passport';
import { Request, Response, NextFunction, RequestHandler } from 'express';

// Entities
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

// Exceptions
import { UnauthenticatedException } from '@api/auth/domain/exceptions/unauthenticated';

import '@core/strategies/jwt';

export class Authentication {
	handler(): RequestHandler {
		return (req: Request, res: Response, next: NextFunction): void => {
			passport.authenticate('jwt', (error: any, user: IAuthUserEntity) => {
				if (error || !user) {
					return next(new UnauthenticatedException());
				}

				req.login(user, { session: false }, (errorLogin) => {
					if (errorLogin) {
						return next(new UnauthenticatedException());
					}

					req.user = user;
					next();
				});
			})(req, res, next);
		};
	}
}

export const authentication = new Authentication();
