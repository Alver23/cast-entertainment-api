// Repositories
import { IAuthRepository } from '@api/auth/domain/repositories/auth';
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export class AuthRepository implements IAuthRepository {
	private readonly personRepository: PersonRepository;

	constructor() {
		this.personRepository = new PersonRepository();
	}

	findUserByEmail(email: string): Promise<IPersonEntity> {
		return this.personRepository.findOne({ query: { email } });
	}
}
