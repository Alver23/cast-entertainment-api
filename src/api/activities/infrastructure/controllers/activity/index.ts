// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

// Interfaces
import { IActivityService } from '@api/activities/application/activity-service/activity-interface';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class ActivityController extends BaseController<IActivityEntity, IActivityEntity, IActivityService> {
	constructor(service: IActivityService) {
		super(service);
	}
}
