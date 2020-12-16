// Entities
import { IItineraryActivityEntity } from '@api/itinerary-activity/domain/entities/itinerary-activity';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IItineraryActivityRepository = IBaseCrudRepository<IItineraryActivityEntity, IItineraryActivityEntity>;
