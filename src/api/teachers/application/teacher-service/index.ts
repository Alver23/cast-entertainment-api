// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { ITeacherRepository } from '@api/teachers/domain/repositories/teacher';

export class TeacherService extends BaseCrudService<ITeacherEntity, ITeacherEntity> {
	constructor(repository: ITeacherRepository) {
		super(repository);
	}
}
