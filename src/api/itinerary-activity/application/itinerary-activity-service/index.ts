// Entities
import { IItineraryActivityEntity } from '@api/itinerary-activity/domain/entities/itinerary-activity';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IItineraryActivityRepository } from '@api/itinerary-activity/domain/repositories/itinerary-activity';

// Interfaces
import { IItineraryActivityService } from './itinerary-activity-interfaces';

// Dto's
import { ItineraryActivityDto } from './dto/item';

export class ItineraryActivityService
	extends BaseCrudService<IItineraryActivityEntity, IItineraryActivityEntity, IItineraryActivityRepository>
	implements IItineraryActivityService {
	protected schemaItem = ItineraryActivityDto;

	protected schemaItems = ItineraryActivityDto;

	constructor(repository: IItineraryActivityRepository) {
		super(repository);
	}
}
