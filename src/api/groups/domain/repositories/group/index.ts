// Entities
import { IGroupEntity } from '@api/groups/domain/entities/group';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IGroupRepository = IBaseCrudRepository<IGroupEntity, IGroupEntity>;
