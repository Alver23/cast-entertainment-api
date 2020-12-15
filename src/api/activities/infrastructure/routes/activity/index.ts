// Controllers
import { ActivityController } from '@api/activities/infrastructure/controllers/activity';

// Services
import { ActivityService } from '@api/activities/application/activity-service';

// Repositories
import { ActivityRepository } from '@api/activities/infrastructure/persistence/activity';

// Dto's
import { ActivityCreatorDto } from '@api/activities/infrastructure/dto/activity';
import { ActivityUpdaterDto } from '@api/activities/infrastructure/dto/activity/acitvity-updater';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

const service = new ActivityService(new ActivityRepository());
const controller = new ActivityController(service);

const schema = {
	post: {
		body: ActivityCreatorDto,
	},
	put: {
		body: ActivityUpdaterDto,
	},
};

const basePath = '/activities';
export const activityRouter = baseRouter(basePath, controller, schema);
