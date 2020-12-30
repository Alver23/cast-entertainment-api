// Dependencies
import { Sequelize } from 'sequelize';

// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Models
import { Itinerary } from '@database/models/itinerary';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Interfaces
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Repositories
import { IItineraryRepository } from '@api/itineraries/domain/repositories/itinerary';

export class ItineraryRepository extends BaseCrudRepository<typeof Itinerary, IItineraryEntity, IItineraryEntity>
	implements IItineraryRepository {
	constructor() {
		super(Itinerary);
	}

	findAll(options: any = { filters: {} }): Promise<IItineraryEntity[]> {
		const { filters, ...otherValues } = options;
		let buildOptions = {
			...otherValues,
			include: [{ association: 'itineraryHasActivity' }],
		};

		if (filters.name) {
			const sentence = Sequelize.literal('MATCH (name, description) AGAINST (:name)');
			buildOptions = {
				...buildOptions,
				attributes: ['id', 'name', 'description', [sentence, 'score']],
				where: sentence,
				replacements: {
					name: filters.name,
				},
				order: [[Sequelize.literal('score'), 'DESC']],
			};
		}
		return super.findAll(buildOptions);
	}

	async findOne({ query }: IQueryParams): Promise<IItineraryEntity> {
		const options = {
			include: [
				{
					association: 'itineraryHasActivity',
					include: [{ association: 'activity' }],
				},
			],
		};
		return super.findOne({ query, options });
	}
}
