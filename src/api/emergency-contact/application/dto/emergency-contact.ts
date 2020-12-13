// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { PersonResponseDto } from '@api/persons/application/dto/person';

export class EmergencyContactResponse extends PersonResponseDto {
	@Expose()
	id: number;

	@Expose()
	relationshipId: number;

	@Expose()
	personId?: number;
}
