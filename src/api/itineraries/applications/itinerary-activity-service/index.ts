// Entities
import { IItineraryActivityEntity } from '@api/itineraries/domain/entities/itinerary-activity';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IItineraryActivtyRepository } from '@api/itineraries/domain/repositories/itinerary-activity';

// Interfaces
import { IItineraryActivityService } from './itinerary-activity-interfaces';

// Dto's
import { ItineraryActivityDto } from './dto/item';

export class ItineraryActivityService
	extends BaseCrudService<IItineraryActivityEntity, IItineraryActivityEntity, IItineraryActivtyRepository>
	implements IItineraryActivityService {
	protected schemaItem = ItineraryActivityDto;

	protected schemaItems = ItineraryActivityDto;

	constructor(repository: IItineraryActivtyRepository) {
		super(repository);
	}
}
