// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class ArtistBeneficiary extends PersonDto {
	@IsNotEmpty()
	@Expose()
	percentage: number;

	@IsNotEmpty()
	@Expose()
	relationshipId: number;
}
