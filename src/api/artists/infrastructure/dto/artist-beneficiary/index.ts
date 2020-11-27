// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { ArtistPerson } from '@api/artists/infrastructure/dto/artist-person';

export class ArtistBeneficiary extends ArtistPerson {
	@Expose()
	id?: number;

	@Expose()
	personId?: number;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	percentage: number;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	relationshipId: number;
}
