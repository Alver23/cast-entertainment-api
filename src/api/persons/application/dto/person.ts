// Dependencies
import { Expose, Transform, Type } from 'class-transformer';

// Utils
import { calculateAge } from '@utils/calculate-age';

export class PersonResponseDto {
	@Expose()
	firstName: string;

	@Expose()
	lastName: string;

	@Expose()
	email: string;

	@Expose()
	@Type(() => Date)
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

	@Expose()
	@Transform((value, obj) => calculateAge(obj.dateOfBirth))
	age: number;
}
