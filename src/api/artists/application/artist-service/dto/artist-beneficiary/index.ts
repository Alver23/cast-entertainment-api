// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { PersonResponseDto } from '@api/persons/application/dto/person';

export class ArtistBeneficiaryResponse extends PersonResponseDto {
	@Expose()
	id?: number;

	@Expose()
	personId?: number;

	@Expose()
	percentage: number;

	@Expose()
	relationshipId: number;
}
