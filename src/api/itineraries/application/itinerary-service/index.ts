// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Repositories
import { IItineraryRepository } from '@api/itineraries/domain/repositories/itinerary';

// Interfaces
import { IItineraryService } from './itinerary-interfaces';

// Dto's
import { ItineraryDto } from './dto/item';

export class ItineraryService extends BaseCrudService<IItineraryEntity, IItineraryEntity, IItineraryRepository>
	implements IItineraryService {
	protected schemaItem = ItineraryDto;

	protected schemaItems = ItineraryDto;

	constructor(repository: IItineraryRepository) {
		super(repository);
	}
}
