// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Controller
import { userController } from '../controller/user-controller';

export const userRouter = (app: Application): void => {
	const basePath = '/users';
	const router = Router();
	app.use(basePath, router);

	router.get('/', (request: Request, response: Response, next: NextFunction) => userController.getUsers(request, response, next));
	router.get('/:id', (request: Request, response: Response, next: NextFunction) => userController.getUser(request, response, next));
	router.post('/', (request: Request, response: Response, next: NextFunction) => userController.createUser(request, response, next));
};
