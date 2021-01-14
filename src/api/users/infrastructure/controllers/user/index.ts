// Dependencies
import { Request } from 'express';
import { OK } from 'http-status-codes';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

// Services
import { IUserService } from '@api/users/application/user-service/interface';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

export class UserController extends BaseController<IUserEntity, IUserEntity, IUserService> {
	constructor(service: IUserService) {
		super(service);
	}

	async getMenus(req: Request, res: ICustomResponse): Promise<any> {
		const {
			params: { id },
		} = req;
		const response = await this.baseService.getUserMenus(+id);
		res.responseJson({ data: response, status: OK });
	}
}
