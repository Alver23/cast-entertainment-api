// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IPersonRepository } from '@api/persons/domain/repositories/person';

import { PersonResponseDto } from '@api/persons/application/dto/person';

export class PersonService extends BaseCrudService<IPersonEntity, IPersonEntity, IPersonRepository> {
	protected schemaItem = PersonResponseDto;

	protected schemaItems = PersonResponseDto;

	constructor(repository: IPersonRepository) {
		super(repository);
	}
}
