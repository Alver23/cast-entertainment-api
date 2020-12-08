// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class ArtistBeneficiary extends PersonDto {
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
