// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { ArtistPerson } from '@api/artists/infrastructure/dto/artist-person';

export class ArtistEmergencyContact extends ArtistPerson {
	@IsNotEmpty()
	@IsDefined()
	@Expose()
	relationshipId: number;

	@Expose()
	id?: number;

	@Expose()
	personId?: number;
}
