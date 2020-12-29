// Dependencies
import { IsNotEmpty, IsDefined } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class EmergencyContact extends PersonDto {
	@IsNotEmpty()
	@Expose()
	relationshipId: number;

	@Expose()
	ipAddress: string;
}
