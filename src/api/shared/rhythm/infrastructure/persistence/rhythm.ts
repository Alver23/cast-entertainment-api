// Entities
import { IRhythmEntity } from '@api/shared/rhythm/domain/entities/rhythm';

// Models
import { Rhythm } from '@database/models/rhythm';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class RhythmRepository extends BaseCrudRepository<typeof Rhythm, IRhythmEntity, IRhythmEntity> {
	constructor() {
		super(Rhythm);
	}
}
