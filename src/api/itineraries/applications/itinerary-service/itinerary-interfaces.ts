// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IItineraryService = IBaseCrudService<IItineraryEntity, IItineraryEntity>;
