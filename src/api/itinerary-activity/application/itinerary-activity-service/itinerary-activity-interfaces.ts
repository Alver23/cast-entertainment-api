// Entities
import { IItineraryActivityEntity } from '@api/itinerary-activity/domain/entities/itinerary-activity';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export type IItineraryActivityService = IBaseCrudService<IItineraryActivityEntity, IItineraryActivityEntity>;
