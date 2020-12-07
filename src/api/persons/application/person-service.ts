// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IPersonRepository } from '@api/persons/domain/repositories/person';

export class PersonService extends BaseCrudService<IPersonEntity, IPersonEntity> {
	constructor(repository: IPersonRepository) {
		super(repository);
	}
}
