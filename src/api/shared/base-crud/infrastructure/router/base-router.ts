// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

// Interfaces
import { IBaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller-interface';

// Midlewares
import { schemaValidator } from '@core/middlewares/schema-validator';
import { ISchemaStructure, defaultSchema } from './base-router-interface';

export const baseRouter = (basePath: string, controller: IBaseController, schema: ISchemaStructure = {}) => {
	const schemaValidate: ISchemaStructure = {
		...defaultSchema,
		...schema,
	};

	const router = Router();
	return (app: Application): void => {
		app.use(basePath, router);

		router.get('/', schemaValidator.handler(schemaValidate.get), (request: Request, response: Response, next: NextFunction) =>
			controller.getAll(request, response, next),
		);

		router.get('/:id', schemaValidator.handler(schemaValidate.getById), (request: Request, response: Response, next: NextFunction) =>
			controller.getById(request, response, next),
		);

		router.post('/', schemaValidator.handler(schemaValidate.post), (request: Request, response: Response, next: NextFunction) =>
			controller.create(request, response, next),
		);

		router.put('/:id', schemaValidator.handler(schemaValidate.put), (request: Request, response: Response, next: NextFunction) =>
			controller.update(request, response, next),
		);

		router.delete('/:id', schemaValidator.handler(schemaValidate.delete), (request: Request, response: Response, next: NextFunction) =>
			controller.delete(request, response, next),
		);
	};
};
