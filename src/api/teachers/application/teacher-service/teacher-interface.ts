// Entities
import { ITeacherEntity, ITeacherArtist } from '@api/teachers/domain/entities/teacher';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export interface ITeacherService extends IBaseCrudService<ITeacherEntity, ITeacherEntity> {
	createMany(data: ITeacherArtist): Promise<any>;
}
