// Dependencies
import { NextFunction, Response, Request, Router, Application } from 'express';

// Controllers
import { authController } from '@api/auth/controllers/auth-controller';

export const authRouter = (app: Application): void => {
	const basePath = '/auth';
	const router = Router();
	app.use(basePath, router);
	router.post('/login', (req: Request, res: Response, next: NextFunction) => authController.login(req, res, next));
	router.post('/token', (req: Request, res: Response, next: NextFunction) => authController.refreshToken(req, res, next));
};
