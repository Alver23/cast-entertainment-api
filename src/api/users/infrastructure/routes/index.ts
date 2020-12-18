// Services
import { UserService } from '@api/users/application/user-service';

// Repositories
import { UserRepository } from '@api/users/infrastructure/persistence/user';

// Controllers
import { UserController } from '@api/users/infrastructure/controllers/user';

// Shared
import { baseRouter } from '@api/shared/base-crud/infrastructure/router/base-router';

// Dto's
import { UserCreatorDto } from '@api/users/infrastructure/dto/user';
import { UserUpdaterDto } from '@api/users/infrastructure/dto/user/updater';
import { RetrieveDto } from '@api/shared/base-crud/infrastructure/dto/retrieve';

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

export const userRouter = baseRouter(basePath, controller, schema);
