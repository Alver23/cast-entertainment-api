// Entities
import { IArtistPerson } from '@api/artists/domain/entities/artist-person/artist-person-entity';

export interface IArtistEmergencyContact extends IArtistPerson {
	id?: number;
	personId?: number;
	relationshipId: number;
}
