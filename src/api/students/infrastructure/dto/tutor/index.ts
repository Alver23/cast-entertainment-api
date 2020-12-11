// Dependencies
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsDefined } from 'class-validator';

export class TutorDto {
	@IsNotEmpty()
	@IsDefined()
	@Expose()
	names: string;

	@IsEmail()
	@Expose()
	email: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	cellPhone: string;

	@Expose()
	address: string;

	@Expose()
	city: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	relationshipId: number;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	countryId: number;
}
