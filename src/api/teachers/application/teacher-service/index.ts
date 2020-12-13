// Entities
import { ITeacherEntity, ITeacherArtist } from '@api/teachers/domain/entities/teacher';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { ITeacherRepository } from '@api/teachers/domain/repositories/teacher';

// Dto's
import { TeacherItemDto } from './dto/item';
import { TeacherItemsDto } from './dto/items';

export class TeacherService extends BaseCrudService<ITeacherEntity, ITeacherEntity, ITeacherRepository> {
	protected schemaItem = TeacherItemDto;

	protected schemaItems = TeacherItemsDto;

	constructor(repository: ITeacherRepository) {
		super(repository);
	}

	async createMany(data: ITeacherArtist): Promise<any> {
		return this.repository.createMany(data);
	}
}
