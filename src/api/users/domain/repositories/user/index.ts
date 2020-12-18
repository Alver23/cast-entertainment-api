// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

export type IUserRepository = IBaseCrudRepository<IUserEntity, IUserEntity>;
