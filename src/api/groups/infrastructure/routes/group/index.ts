// Controllers
import { GroupController } from '@api/groups/infrastructure/controllers/group';

// Services
import { GroupService } from '@api/groups/application/group-service';

// Repositories
import { GroupRepository } from '@api/groups/infrastructure/persistence/group';

// Dto's
import { GroupCreatorDto } from '@api/groups/infrastructure/dto/group';
import { GroupUpdaterDto } from '@api/groups/infrastructure/dto/group/updater';

// Shared
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

const service = new GroupService(new GroupRepository());
const controller = new GroupController(service);

const schema = {
	post: {
		body: GroupCreatorDto,
	},
	put: {
		body: GroupUpdaterDto,
		params: RetrieveDto,
	},
};

const basePath = '/groups';

export const groupRouter = baseRouter(basePath, controller, schema);
