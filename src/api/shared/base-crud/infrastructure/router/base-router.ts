// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Models
import { IBaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller-interface';

import { validationHandler } from '@core/middlewares/validation-handler';

export const baseRouter = (basePath: string, controller: IBaseController, postScheme?, putScheme?) => {
	const router = Router();
	return (app: Application): void => {
		app.use(basePath, router);

		router.get('/', (request: Request, response: Response, next: NextFunction) => controller.getAll(request, response, next));

		router.get('/:id', (request: Request, response: Response, next: NextFunction) => controller.getById(request, response, next));

		router.post('/', validationHandler(postScheme), (request: Request, response: Response, next: NextFunction) =>
			controller.create(request, response, next),
		);

		router.put('/:id', validationHandler(putScheme), (request: Request, response: Response, next: NextFunction) =>
			controller.update(request, response, next),
		);

		router.delete('/:id', (request: Request, response: Response, next: NextFunction) => controller.delete(request, response, next));
	};
};
