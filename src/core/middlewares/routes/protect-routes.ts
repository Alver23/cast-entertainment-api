// Dependencies
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { Request, Response, NextFunction } from 'express';

import '@core/strategies/jwt';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';

// Interfaces
import { IUserAuth } from '@api/auth/services';

export const protectRoutes = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate('jwt', (error: any, user: IUserAuth | undefined) => {
		if (error || !user) {
			return next(unauthorized(HttpMessages.UNAUTHORIZED));
		}

		req.login(user, { session: false }, (errorLogin) => {
			if (errorLogin) {
				return next(errorLogin);
			}
			next();
		});
	})(req, res, next);
};
