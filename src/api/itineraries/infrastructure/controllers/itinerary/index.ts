// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Interfaces
import { IItineraryService } from '@api/itineraries/application/itinerary-service/itinerary-interfaces';

// Shared
import { BaseController } from '@api/shared/base-crud/infrastructure/controllers/base-controller';

export class ItineraryController extends BaseController<IItineraryEntity, IItineraryEntity, IItineraryService> {
	constructor(service: IItineraryService) {
		super(service);
	}
}
