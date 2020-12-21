// Dependencies
import passport from 'passport';
import { Request, Response, NextFunction } from 'express';

// Entities
import { IAuthUserEntity } from '@api/auth/domain/entities/auth';

// Exceptions
import { UnauthorizedException } from '@api/auth/domain/exceptions/auth';

import '@core/strategies/jwt';

export const protectRoutes = (req: Request, res: Response, next: NextFunction): void => {
	passport.authenticate('jwt', (error: any, user: IAuthUserEntity) => {
		if (error || !user) {
			return next(new UnauthorizedException());
		}

		req.login(user, { session: false }, (errorLogin) => {
			if (errorLogin) {
				return next(errorLogin);
			}
			req.user = user;
			next();
		});
	})(req, res, next);
};
