// Entities
import { IItineraryEntity } from '@api/itineraries/domain/entities/itinerary';
// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

export type IItineraryRepository = IBaseCrudRepository<IItineraryEntity, IItineraryEntity>;
