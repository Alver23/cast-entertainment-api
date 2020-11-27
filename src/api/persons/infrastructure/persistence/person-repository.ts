// Models
import { Person } from '@database/models/person';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class PersonRepository extends BaseCrudRepository<typeof Person, any, any> {
	constructor() {
		super(Person);
	}
}
