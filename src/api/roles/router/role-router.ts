// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Controllers
import { roleController } from '@api/roles/controllers/role-controller';

export const roleRouter = (app: Application): void => {
	const basePath = '/roles';
	const router = Router();
	app.use(basePath, router);

	router.get('/', (request: Request, response: Response, next: NextFunction) => roleController.getRoles(request, response, next));
	router.get('/:id', (request: Request, response: Response, next: NextFunction) => roleController.getRole(request, response, next));
};
