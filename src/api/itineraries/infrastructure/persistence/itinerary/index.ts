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
import { Sequelize } from 'sequelize';

export class ItineraryRepository extends BaseCrudRepository<typeof Itinerary, IItineraryEntity, IItineraryEntity>
	implements IItineraryRepository {
	constructor() {
		super(Itinerary);
	}

	findAll(): Promise<IItineraryEntity[]> {
		const options = {
			attributes: {
				include: [[Sequelize.fn('COUNT', Sequelize.col('itineraryHasActivity.id')), 'activitiesNumber']],
			},
			include: [{ association: 'itineraryHasActivity', attributes: [] }],
			group: ['itinerary.id'],
		};
		return super.findAll(options);
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
