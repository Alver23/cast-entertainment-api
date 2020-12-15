// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Models
import { Itinerary } from '@database/models/itinerary';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ItineraryRepository extends BaseCrudRepository<typeof Itinerary, IItineraryEntity, IItineraryEntity> {
	constructor() {
		super(Itinerary);
	}
}
