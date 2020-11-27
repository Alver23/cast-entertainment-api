// Entities
import { IArtistPerson } from '@api/artists/domain/entities/artist-person/artist-person-entity';

export interface IArtistBeneficiary extends IArtistPerson {
	id?: number;
	personId?: number;
	percentage: number;
	relationshipId: number;
}
