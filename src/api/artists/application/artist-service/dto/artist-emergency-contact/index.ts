// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { ArtistPersonResponse } from '@api/artists/application/artist-service/dto/artist-person';

export class ArtistEmergencyContactResponse extends ArtistPersonResponse {
	@Expose()
	id: number;

	@Expose()
	relationshipId: number;

	@Expose()
	personId?: number;
}
