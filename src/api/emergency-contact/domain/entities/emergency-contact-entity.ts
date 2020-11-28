// Entities
import { IArtistPerson } from '@api/artists/domain/entities/artist-person/artist-person-entity';

export interface IEmergencyContact extends IArtistPerson {
	personId?: number;
	relationshipId: number;
}
