// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Models
import { Itinerary } from '@database/models/itinerary';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Interfaces
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export class ItineraryRepository extends BaseCrudRepository<typeof Itinerary, IItineraryEntity, IItineraryEntity> {
	constructor() {
		super(Itinerary);
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
