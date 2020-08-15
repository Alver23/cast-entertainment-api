// Dependencies
import { Router, Request, Response, NextFunction, Application } from 'express';

import { personController } from '../controller/person-controller';

export const personRouter = (app: Application): void => {
	const basePath = '/persons';
	const router = Router();
	app.use(basePath, router);

	router.get('/', (request: Request, response: Response, next: NextFunction) => personController.getPersons(request, response, next));

	router.get('/:id', (request: Request, response: Response, next: NextFunction) => personController.getPersonById(request, response, next));

	router.post('/', (request: Request, response: Response, next: NextFunction) => personController.createPerson(request, response, next));

	router.put('/:id', (request: Request, response: Response, next: NextFunction) => personController.updatePerson(request, response, next));

	router.delete('/:id', (request: Request, response: Response, next: NextFunction) =>
		personController.deletePerson(request, response, next),
	);
};
