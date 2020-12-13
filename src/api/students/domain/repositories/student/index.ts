// Entities
import { IStudentEntity } from '@api/students/domain/entities/student';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IStudentRepository = IBaseCrudRepository<IStudentEntity, IStudentEntity>;
