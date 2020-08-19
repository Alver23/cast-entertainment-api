// Dependencies
import passport from 'passport';
import { unauthorized } from '@hapi/boom';
import { Strategy, ExtractJwt } from 'passport-jwt';

// Services
import { authServiceInstance } from '@api/auth/services/auth-service';

// Config
import { config } from '@config/index';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';

passport.use(
	new Strategy(
		{
			secretOrKey: config.jwt.secret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async (payload, cb) => {
			try {
				const { email } = payload;
				const user = await authServiceInstance.getUser(email);
				if (!user) {
					return cb(unauthorized(HttpMessages.UNAUTHORIZED));
				}
				return cb(null, user);
			} catch (error) {
				cb(error);
			}
		},
	),
);
