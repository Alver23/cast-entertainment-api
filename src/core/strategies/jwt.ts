// Dependencies
import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

// Config
import { config } from '@config/index';

// Repositories
import { AuthRepository } from '@api/auth/infrastructure/persistence/auth';
import { TokenRepository } from '@api/auth/infrastructure/persistence/token';

// Services
import { AuthService } from '@api/auth/application/auth-service';
import { TokenService } from '@api/auth/application/token-service';

passport.use(
	new Strategy(
		{
			secretOrKey: config.jwt.secret,
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		},
		async (payload, cb) => {
			try {
				const { email } = payload;
				const tokenService = new TokenService(new TokenRepository());
				const authService = new AuthService(new AuthRepository(), tokenService);
				const user = await authService.getUser(email);
				return cb(null, user);
			} catch (error) {
				cb(error);
			}
		},
	),
);
