// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IActivityRepository = IBaseCrudRepository<IActivityEntity, IActivityEntity>;
