// Dependencies
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { unauthorized } from '@hapi/boom';
import { compare } from 'bcrypt';

// Services
import { authServiceInstance } from '@api/auth/services/auth-service';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';

passport.use(
	new BasicStrategy(async (email: string, password: string, cb: any) => {
		try {
			const user = await authServiceInstance.getUser(email);

			if (!user) {
				return cb(unauthorized(HttpMessages.UNAUTHORIZED));
			}

			const { password: userPassword, ...otherValues } = user;
			if (!(await compare(password, userPassword))) {
				return cb(unauthorized(HttpMessages.UNAUTHORIZED));
			}

			return cb(null, otherValues);
		} catch (error) {
			return cb(error);
		}
	}),
);
