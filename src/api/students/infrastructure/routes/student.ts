// Controllers
import { StudentController } from '@api/students/infrastructure/controllers/student';

// Dto's
import { StudentCreatorDto } from '@api/students/infrastructure/dto/student';
import { StudentUpdaterDto } from '@api/students/infrastructure/dto/student/updater';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';
import { ISchemaStructure } from '@api/shared/base-crud/infrastructure/router/base-router-interface';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

// Services
import { StudentService } from '@api/students/application/student-service';

// Repositories
import { StudentRepository } from '@api/students/infrastructure/persistence/student';

const service = new StudentService(new StudentRepository());
const controller = new StudentController(service);
const basePath = '/students';
const schemaValidation: ISchemaStructure = {
	post: {
		body: StudentCreatorDto,
	},
	put: {
		body: StudentUpdaterDto,
		params: RetrieveDto,
	},
	delete: {
		params: RetrieveDto,
	},
	getById: {
		params: RetrieveDto,
	},
};

export const studentRouter = baseRouter(basePath, controller, schemaValidation);
