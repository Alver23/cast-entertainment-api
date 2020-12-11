// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Repository
import { TeacherRepository } from '@api/teachers/infrastructure/persistence/teacher';

// Application
import { TeacherService } from '@api/teachers/application/teacher-service';

// Controllers
import { TeacherController } from '@api/teachers/infrastructure/controllers/teacher';

const service = new TeacherService(new TeacherRepository());
const controller = new TeacherController(service);

const basePath = '/teachers';
export const teacherRouter = baseRouter(basePath, controller);
