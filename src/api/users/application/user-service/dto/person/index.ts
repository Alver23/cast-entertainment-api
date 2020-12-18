// Dependencies
import { Expose, Transform } from 'class-transformer';

// Dto's

export class PersonDto {
	@Expose()
	id: number;

	@Expose()
	firstName: string;

	@Expose()
	lastName: string;

	@Expose()
	email: string;

	@Expose()
	cellPhone: string;

	@Expose()
	@Transform((value, obj) => `${obj.firstName} ${obj.lastName}`)
	fullName: string;
}
