// Entities
import { IItineraryActivityEntity } from '@api/itinerary-activity/domain/entities/itinerary-activity';

// Models
import { ItineraryHasActivity } from '@database/models/itinerary-has-activity';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { IItineraryActivityRepository } from '@api/itinerary-activity/domain/repositories/itinerary-activity';

export class ItineraryActivityRepository
	extends BaseCrudRepository<typeof ItineraryHasActivity, IItineraryActivityEntity, IItineraryActivityEntity>
	implements IItineraryActivityRepository {
	constructor() {
		super(ItineraryHasActivity);
	}
}
