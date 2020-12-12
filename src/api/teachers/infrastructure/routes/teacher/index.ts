// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Repository
import { TeacherRepository } from '@api/teachers/infrastructure/persistence/teacher';

// Application
import { TeacherService } from '@api/teachers/application/teacher-service';

// Controllers
import { TeacherController } from '@api/teachers/infrastructure/controllers/teacher';

// Dto's
import { TeacherCreatorDto } from '@api/teachers/infrastructure/dto/teacher';
import { TeacherUpdaterDto } from '@api/teachers/infrastructure/dto/teacher/updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

const service = new TeacherService(new TeacherRepository());
const controller = new TeacherController(service);

const basePath = '/teachers';
const schema = {
	post: {
		body: TeacherCreatorDto,
	},
	put: {
		body: TeacherUpdaterDto,
		params: RetrieveDto,
	},
	delete: {
		params: RetrieveDto,
	},
	getById: {
		params: RetrieveDto,
	},
};
export const teacherRouter = baseRouter(basePath, controller, schema);
