// Dependencies
import { Application, Request, Router } from 'express';

// Services
import { UserService } from '@api/users/application/user-service';

// Repositories
import { UserRepository } from '@api/users/infrastructure/persistence/user';

// Controllers
import { UserController } from '@api/users/infrastructure/controllers/user';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Dto's
import { UserCreatorDto } from '@api/users/infrastructure/dto/user';
import { UserUpdaterDto } from '@api/users/infrastructure/dto/user/updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

// Middleware
import { catchErrors } from '@core/middlewares/async-error';
import { authorization } from '@core/middlewares/guards/authorization';
import { schemaValidator } from '@core/middlewares/schema-validator';

// Config
import { config } from '@config/index';

const {
	roles: { superAdmin },
} = config;

const service = new UserService(new UserRepository());
const controller = new UserController(service);

const schema = {
	post: {
		body: UserCreatorDto,
	},
	put: {
		body: UserUpdaterDto,
		params: RetrieveDto,
	},
	delete: {
		params: RetrieveDto,
	},
	getById: {
		params: RetrieveDto,
	},
};

const basePath = '/users';

export const userRouter = (app: Application): void => {
	const router = Router();
	app.use(`${basePath}`, router);

	router.get(
		'/:id/menus',
		authorization.handler(superAdmin),
		schemaValidator.handler({ params: RetrieveDto }),
		catchErrors.handler((request: Request, response: ICustomResponse) => controller.getMenus(request, response)),
	);
	baseRouter(basePath, controller, schema)(app);
};
