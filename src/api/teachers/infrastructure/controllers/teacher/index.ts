// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Services
import { ITeacherService } from '@api/teachers/application/teacher-service/teacher-interface';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class TeacherController extends BaseController<ITeacherEntity, ITeacherEntity, ITeacherService> {
	constructor(service: ITeacherService) {
		super(service);
	}
}
