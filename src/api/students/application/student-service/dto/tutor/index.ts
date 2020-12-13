// Dependencies
import { Expose } from 'class-transformer';

export class TutorDto {
	@Expose()
	id: number;

	@Expose()
	names: string;

	@Expose()
	email: string;

	@Expose()
	cellPhone: string;

	@Expose()
	address: string;

	@Expose()
	city: string;

	@Expose()
	relationshipId: number;

	@Expose()
	countryId: number;
}
