// Dependencies
import passport from 'passport';
import { BasicStrategy } from 'passport-http';

// Repositories
import { AuthRepository } from '@api/auth/infrastructure/persistence/auth';
import { TokenRepository } from '@api/auth/infrastructure/persistence/token';

// Services
import { AuthService } from '@api/auth/application/auth-service';
import { TokenService } from '@api/auth/application/token-service';

passport.use(
	new BasicStrategy(async (email: string, password: string, cb: any) => {
		try {
			const tokenService = new TokenService(new TokenRepository());
			const authService = new AuthService(new AuthRepository(), tokenService);
			const user = await authService.login(email, password);
			return cb(null, user);
		} catch (error) {
			return cb(error);
		}
	}),
);
