// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Models
import { Teacher } from '@database/models/teacher';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class TeacherRepository extends BaseCrudRepository<typeof Teacher, ITeacherEntity, ITeacherEntity> {
	constructor() {
		super(Teacher);
	}
}
