// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IPersonRepository = IBaseCrudRepository<IPersonEntity, IPersonEntity>;
