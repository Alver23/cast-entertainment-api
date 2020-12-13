// Entities
import { IStudentEntity } from '@api/students/domain/entities/student';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Services
import { IStudentService } from '@api/students/application/student-service/interface';

export class StudentController extends BaseController<IStudentEntity, IStudentEntity, IStudentService> {
	constructor(service: IStudentService) {
		super(service);
	}
}
