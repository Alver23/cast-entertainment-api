// Dependencies
import { Op } from 'sequelize';

// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

// Repositories
import { IFilterForFullName, IPersonRepository } from '@api/persons/domain/repositories/person';

// Models
import { Person } from '@database/models/person';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { Sequelize } from 'sequelize';

export class PersonRepository extends BaseCrudRepository<typeof Person, IPersonEntity, IPersonEntity> implements IPersonRepository {
	constructor() {
		super(Person);
	}

	getFilterForFullName(fullName): IFilterForFullName {
		const sentence = Sequelize.literal('MATCH (person.first_name, person.last_name) AGAINST (:fullName)');
		return {
			attributes: [[sentence, 'score']],
			where: sentence,
			replacements: {
				fullName,
			},
			order: [[Sequelize.literal('score'), 'DESC']],
		};
	}

	getPersonByEmail(email: string, id?: number): Promise<IPersonEntity> {
		let query: any = { email };
		if (id) {
			query = {
				...query,
				id: {
					[Op.ne]: id,
				},
			};
		}
		return super.findOne({ query });
	}
}
