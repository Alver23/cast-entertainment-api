// Entities
import { ITeacherEntity, ITeacherArtist } from '@api/teachers/domain/entities/teacher';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export interface ITeacherRepository extends IBaseCrudRepository<ITeacherEntity, ITeacherEntity> {
	createMany(data: ITeacherArtist): Promise<ITeacherEntity>;
}
