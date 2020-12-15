// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

// Models
import { Activity } from '@database/models/activity';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ActivityRepository extends BaseCrudRepository<typeof Activity, IActivityEntity, IActivityEntity> {
	constructor() {
		super(Activity);
	}
}
