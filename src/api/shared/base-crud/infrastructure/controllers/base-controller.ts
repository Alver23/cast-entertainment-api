// Dependencies
import { CREATED, OK } from 'http-status-codes';
import { Request } from 'express';

// Utils
import { HttpMessages, setResponseForDelete } from '@utils/index';

// Interfaces
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';
import { ICustomResponse } from '@core/middlewares/response/response-interface';
import { IQueryParams } from './base-controller-interface';

export abstract class BaseController<T, U, S extends IBaseCrudService<T, U>> {
	constructor(protected readonly baseService: S) {}

	protected getQueryParams(req: Request): IQueryParams {
		const { query } = req;
		const { page, limit, ...otherFilters } = query as any;
		return {
			page,
			limit,
			otherFilters,
		};
	}

	public async getAll(req: Request, res: ICustomResponse): Promise<any> {
		const { page, limit, otherFilters } = this.getQueryParams(req);
		const response = await this.baseService.getAll(page, limit, otherFilters);
		res.responseJson({ data: response, message: HttpMessages.LISTS });
	}

	public async getById(req: Request, res: ICustomResponse): Promise<any> {
		const {
			params: { id },
		} = req;

		const response = await this.baseService.getById(id);
		res.responseJson({ data: response, status: OK });
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
