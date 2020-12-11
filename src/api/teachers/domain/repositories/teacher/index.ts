// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type ITeacherRepository = IBaseCrudRepository<ITeacherEntity, ITeacherEntity>;
