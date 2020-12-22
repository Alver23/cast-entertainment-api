// Dependencies
import { NextFunction, Request, Router, Application } from 'express';

// Controllers
import { AuthController } from '@api/auth/infrastructure/controllers/auth';

// Services
import { AuthService } from '@api/auth/application/auth-service';
import { TokenService } from '@api/auth/application/token-service';

// Repositories
import { AuthRepository } from '@api/auth/infrastructure/persistence/auth';
import { TokenRepository } from '@api/auth/infrastructure/persistence/token';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Middlewares
import { catchErrors } from '@core/middlewares/async-error';

const tokenService = new TokenService(new TokenRepository());
const service = new AuthService(new AuthRepository(), tokenService);
const controller = new AuthController(service);
const basePath = '/auth';

export const authRouter = (app: Application): void => {
	const router = Router();
	app.use(basePath, router);

	router.post(
		'/login',
		catchErrors.handler((request: Request, response: ICustomResponse, next: NextFunction) => controller.login(request, response, next)),
	);

	router.post(
		'/refresh-token',
		catchErrors.handler((request: Request, response: ICustomResponse) => controller.refreshToken(request, response)),
	);
};
