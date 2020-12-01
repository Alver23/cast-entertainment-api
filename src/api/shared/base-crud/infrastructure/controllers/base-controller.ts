// Dependencies
import { CREATED, NOT_FOUND, OK } from 'http-status-codes';
import { Request } from 'express';

// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Utils
import { HttpMessages, setResponseForDelete } from '@utils/index';

export abstract class BaseController<T, U, S extends IBaseCrudService<T, U>> {
	constructor(private readonly baseService: S) {}

	public async getAll(req: Request, res: ICustomResponse): Promise<any> {
		const response = await this.baseService.getAll();
		res.responseJson({ data: response, message: HttpMessages.LISTS });
	}

	public async getById(req: Request, res: ICustomResponse): Promise<any> {
		const {
			params: { id },
		} = req;

		const response = await this.baseService.getById(id);
		const status = response ? OK : NOT_FOUND;
		res.responseJson({ data: response, status });
	}

	public async create(req: Request, res: ICustomResponse): Promise<any> {
		const { body } = req;
		const response = await this.baseService.create(body);
		res.responseJson({ message: HttpMessages.CREATED, data: response, status: CREATED });
	}

	public async update(req: Request, res: ICustomResponse): Promise<any> {
		const {
			body,
			params: { id },
		} = req;

		const response = await this.baseService.update(id, body);
		res.responseJson({ message: HttpMessages.UPDATED, data: response });
	}

	public async delete(req: Request, res: ICustomResponse): Promise<any> {
		const {
			params: { id },
		} = req;

		const response: any = await this.baseService.delete(id);
		const responseMessage = setResponseForDelete(response);
		res.responseJson(responseMessage);
	}
}
