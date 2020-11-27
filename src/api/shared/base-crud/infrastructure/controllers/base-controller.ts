// Dependencies
import { CREATED, NOT_FOUND, OK } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

// Utils
import { setResponse, HttpMessages, setResponseForDelete } from '@utils/index';

export abstract class BaseController<T, U, S extends IBaseCrudService<T, U>> {
	constructor(private readonly baseService: S) {}

	public async getAll(req: Request, res: Response, next: NextFunction): Promise<any> {
		try {
			const response = await this.baseService.getAll();
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

			const response = await this.baseService.getById({ query: { id: +id } });
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

			const response = await this.baseService.update(+id, body);
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

			const response: any = await this.baseService.delete(+id);
			const responseMessage = setResponseForDelete(response);
			res.status(responseMessage.status).json(setResponse(responseMessage));
		} catch (error) {
			next(error);
		}
	}
}
