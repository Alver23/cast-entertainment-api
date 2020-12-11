// Entities
import { ITeacherEntity } from '@api/teachers/domain/entities/teacher';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type ITeacherService = IBaseCrudService<ITeacherEntity, ITeacherEntity>;
