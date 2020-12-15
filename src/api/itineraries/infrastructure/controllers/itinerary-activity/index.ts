// Entities
import { IItineraryActivityEntity } from '@api/itineraries/domain/entities/itinerary-activity';

// Interfaces
import { IItineraryActivityService } from '@api/itineraries/applications/itinerary-activity-service/itinerary-activity-interfaces';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class ItineraryActivityController extends BaseController<
	IItineraryActivityEntity,
	IItineraryActivityEntity,
	IItineraryActivityService
> {
	constructor(service: IItineraryActivityService) {
		super(service);
	}
}
