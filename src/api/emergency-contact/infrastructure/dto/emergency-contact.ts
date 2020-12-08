// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class EmergencyContact extends PersonDto {
	@IsNotEmpty()
	@IsDefined()
	@Expose()
	relationshipId: number;

	@Expose()
	id?: number;

	@Expose()
	personId?: number;
}
