// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

// Entities
import { IGroupEntity } from '@api/groups/domain/entities/group';

export type IGroupService = IBaseCrudService<IGroupEntity, IGroupEntity>;
