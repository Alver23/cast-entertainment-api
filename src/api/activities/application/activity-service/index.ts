// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

// Dto's
import { ActivityDto } from '@api/activities/application/activity-service/dto/item';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IActivityRepository } from '@api/activities/domain/repositories/activity';

// Interfaces
import { IActivityService } from '@api/activities/application/activity-service/activity-interface';

export class ActivityService extends BaseCrudService<IActivityEntity, IActivityEntity, IActivityRepository> implements IActivityService {
	protected schemaItem = ActivityDto;

	protected schemaItems = ActivityDto;

	constructor(repository: IActivityRepository) {
		super(repository);
	}
}
