// Entities
import { IStudentEntity } from '@api/students/domain/entities/student';

// Repositories
import { IStudentRepository } from '@api/students/domain/repositories/student';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Dto's
import { StudentItemDto } from './dto/student/item';
import { StudentItemsDto } from './dto/student/items';

export class StudentService extends BaseCrudService<IStudentEntity, IStudentEntity> {
	protected schemaItem = StudentItemDto;

	protected schemaItems = StudentItemsDto;

	constructor(repository: IStudentRepository) {
		super(repository);
	}
}
