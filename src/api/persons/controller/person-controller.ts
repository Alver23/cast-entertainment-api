// Dependencies
import { Request, Response, NextFunction } from 'express';
import { NOT_FOUND, OK, CREATED } from 'http-status-codes';

// Services
import { personServiceInstance, IPersonService } from '../services';

// Utils
import { setResponse, HttpMessages, setResponseForDelete } from '../../../utils';

export class PersonController {
	constructor(private readonly personService: IPersonService) {}

	public async getPersons(req: Request, res: Response, next: NextFunction) {
		try {
			const data = await this.personService.findAll();
			res.json(setResponse({ data, message: HttpMessages.LISTS }));
		} catch (error) {
			next(error);
		}
	}

	public async getPersonById(req: Request, res: Response, next: NextFunction) {
		try {
			const {
				params: { id },
			} = req;
			const data = await this.personService.findOne({ query: { id: +id } });
			const status = data ? OK : NOT_FOUND;
			res.status(status).json(setResponse({ data, status }));
		} catch (error) {
			next(error);
		}
	}

	public async createPerson(req: Request, res: Response, next: NextFunction) {
		try {
			const { body } = req;
			const data = await this.personService.create(body);
			res.status(CREATED).json(setResponse({ message: HttpMessages.CREATED, data }));
		} catch (error) {
			next(error);
		}
	}

	public async updatePerson(req: Request, res: Response, next: NextFunction) {
		try {
			const {
				body,
				params: { id },
			} = req;
			const data = await this.personService.update(+id, body);
			res.json(setResponse({ message: HttpMessages.CREATED, data }));
		} catch (error) {
			next(error);
		}
	}

	public async deletePerson(req: Request, res: Response, next: NextFunction) {
		try {
			const {
				params: { id },
			} = req;
			const data = await this.personService.deleteOne(+id);
			const responseMessage = setResponseForDelete(data);
			res.status(responseMessage.status).json(setResponse(responseMessage));
		} catch (error) {
			next(error);
		}
	}
}

export const personController = new PersonController(personServiceInstance);
