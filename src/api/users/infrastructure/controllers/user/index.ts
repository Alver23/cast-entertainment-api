// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

// Services
import { IUserService } from '@api/users/application/user-service/interface';

export class UserController extends BaseController<IUserEntity, IUserEntity, IUserService> {
	constructor(service: IUserService) {
		super(service);
	}
}
