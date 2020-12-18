// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IUserService = IBaseCrudService<IUserEntity, IUserEntity>;
