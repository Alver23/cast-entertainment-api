// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { ArtistPersonResponse } from '@api/artists/application/artist-service/dto/artist-person';

export class ArtistBeneficiaryResponse extends ArtistPersonResponse {
	@Expose()
	id?: number;

	@Expose()
	personId?: number;

	@Expose()
	percentage: number;

	@Expose()
	relationshipId: number;
}
