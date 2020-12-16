// Entities
import { IActivityEntity } from '@api/activities/domain/entities/activity';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IActivityService = IBaseCrudService<IActivityEntity, IActivityEntity>;
