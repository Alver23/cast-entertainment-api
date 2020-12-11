// Entities
import { IStudentEntity } from '@api/students/domain/entities/student';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IStudentService = IBaseCrudService<IStudentEntity, IStudentEntity>;
