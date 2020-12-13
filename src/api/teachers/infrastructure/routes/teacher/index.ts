// Dependencies
import { Router, Application, Request } from 'express';

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
import { TeacherArtistCreatorDto } from '@api/teachers/infrastructure/dto/teacher/teacher-artist-creator';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

// Interfaces
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Middlewares
import { catchErrors } from '@core/middlewares/async-error';
import { schemaValidator } from '@core/middlewares/schema-validator';
import { schemaTransformer } from '@core/middlewares/schema-transformer';

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

const teacherArtistRouter = (app: Application): void => {
	const router = Router();
	app.use(`${basePath}/artist`, router);

	const schemaTeacherArtist = {
		body: TeacherArtistCreatorDto,
	};

	router.post(
		'/',
		schemaValidator.handler(schemaTeacherArtist),
		schemaTransformer.handler(schemaTeacherArtist),
		catchErrors.handler((request: Request, response: ICustomResponse) => controller.createMany(request, response)),
	);
};

export const teacherRouter = (app: Application): void => {
	teacherArtistRouter(app);
	baseRouter(basePath, controller, schema)(app);
};
