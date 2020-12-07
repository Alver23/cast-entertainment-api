// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IPersonService = IBaseCrudService<IPersonEntity, IPersonEntity>;
