// Dependencies
import { NextFunction, Request, Response } from 'express';

// Models
import { IBaseService } from '@api/base-crud/controllers/base-controller-interface';

// Utils
import { setResponse, HttpMessages, setResponseForDelete } from '@utils/index';
import { CREATED, NOT_FOUND, OK } from 'http-status-codes';

export abstract class BaseController<T extends IBaseService> {
	constructor(private readonly baseService: T) {}

	public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const response = await this.baseService.findAll();
			res.json(setResponse({ data: response, message: HttpMessages.LISTS }));
		} catch (error) {
			next(error);
		}
	}

	public async getById(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				params: { id },
			} = req;

			const response = await this.baseService.findOne({ query: { id: +id } });
			const status = response ? OK : NOT_FOUND;
			res.status(status).json(setResponse({ data: response, status }));
		} catch (error) {
			next(error);
		}
	}

	public async create(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const { body } = req;
			const response = await this.baseService.create(body);
			res.status(CREATED).json(setResponse({ message: HttpMessages.CREATED, data: response }));
		} catch (error) {
			next(error);
		}
	}

	public async update(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				body,
				params: { id },
			} = req;

			const response = await this.baseService.updateOne(+id, body);
			res.json(setResponse({ message: HttpMessages.UPDATED, data: response }));
		} catch (error) {
			next(error);
		}
	}

	public async delete(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const {
				params: { id },
			} = req;

			const response = await this.baseService.deleteOne(+id);
			const responseMessage = setResponseForDelete(response);
			res.status(responseMessage.status).json(setResponse(responseMessage));
		} catch (error) {
			next(error);
		}
	}
}
