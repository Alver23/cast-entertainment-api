// Dependencies
import { Application, Request, Router } from 'express';

// Controllers
import { CatalogController } from '@api/catalogs/infrastructure/controllers/catalog';

// Services
import { CatalogService } from '@api/catalogs/application/catalog';

// Repositories
import { CatalogRepository } from '@api/catalogs/infrastructure/persistence/catalog';

// Dto's
import { CatalogCreatorDto } from '@api/catalogs/infrastructure/dto/catalog/creator';
import { CatalogUpdaterDto } from '@api/catalogs/infrastructure/dto/catalog/updater';

// Shared
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';
import { ICustomResponse } from '@core/middlewares/response/response-interface';

// Middleware
import { catchErrors } from '@core/middlewares/async-error';
import { authorization } from '@core/middlewares/guards/authorization';
import { schemaValidator } from '@core/middlewares/schema-validator';

// Config
import { config } from '@config/index';

const service = new CatalogService(new CatalogRepository());
const controller = new CatalogController(service);
const {
	roles: { superAdmin },
} = config;

const schema = {
	post: {
		body: CatalogCreatorDto,
	},
	put: {
		body: CatalogUpdaterDto,
		params: RetrieveDto,
	},
};

const basePath = '/catalogs';

export const catalogRouter = (app: Application): void => {
	const router = Router();
	app.use(`${basePath}/parent`, router);

	router.get(
		'/:id',
		authorization.handler(superAdmin),
		schemaValidator.handler({ params: RetrieveDto }),
		catchErrors.handler((request: Request, response: ICustomResponse) => controller.getByParentId(request, response)),
	);

	baseRouter(basePath, controller, schema)(app);
};
