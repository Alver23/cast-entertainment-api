// Dependencies
import { Expose } from 'class-transformer';

export class PersonResponseDto {
	@Expose()
	firstName: string;

	@Expose()
	lastName: string;

	@Expose()
	email: string;

	@Expose()
	dateOfBirth: Date;

	@Expose()
	address: string;

	@Expose()
	city: string;

	@Expose()
	cellPhone: string;

	@Expose()
	gender: number;

	@Expose()
	documentType: number;

	@Expose()
	documentNumber: string;

	@Expose()
	height: string;

	@Expose()
	countryId: number;
}
