// Entities
import { IItineraryActivityEntity } from '@api/itineraries/domain/entities/itinerary-activity';

// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IItineraryActivtyRepository = IBaseCrudRepository<IItineraryActivityEntity, IItineraryActivityEntity>;
