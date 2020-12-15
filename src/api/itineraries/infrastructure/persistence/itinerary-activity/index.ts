// Entities
import { IItineraryActivityEntity } from '@api/itineraries/domain/entities/itinerary-activity';

// Models
import { ItineraryHasActivity } from '@database/models/itinerary-has-activity';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ItineraryActivityRepository extends BaseCrudRepository<
	typeof ItineraryHasActivity,
	IItineraryActivityEntity,
	IItineraryActivityEntity
> {
	constructor() {
		super(ItineraryHasActivity);
	}
}
