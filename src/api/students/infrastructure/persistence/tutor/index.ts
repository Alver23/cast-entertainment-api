// Entities
import { ITutorEntity } from '@api/students/domain/entities/tutor';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Models
import { Tutor } from '@database/models/tutor';

export class TutorRepository extends BaseCrudRepository<typeof Tutor, ITutorEntity, ITutorEntity> {
	constructor() {
		super(Tutor);
	}
}
