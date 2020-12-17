// Entities
import { IGroupEntity } from '@api/groups/domain/entities/group';

// Services
import { IGroupService } from '@api/groups/application/group-service/interface';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class GroupController extends BaseController<IGroupEntity, IGroupEntity, IGroupService> {
	constructor(service: IGroupService) {
		super(service);
	}
}
