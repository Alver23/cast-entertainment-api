import { Request } from 'express';
import { CREATED } from 'http-status-codes';

// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Services
import { ITeacherService } from '@api/teachers/application/teacher-service/teacher-interface';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Utils
import { HttpMessages } from '@utils/messages/http-messages';

export class TeacherController extends BaseController<ITeacherEntity, ITeacherEntity, ITeacherService> {
	constructor(service: ITeacherService) {
		super(service);
	}

	async createMany(req: Request, res: ICustomResponse): Promise<any> {
		const response = await this.baseService.createMany(req.body);
		res.responseJson({ message: HttpMessages.CREATED, data: response, status: CREATED });
	}
}
