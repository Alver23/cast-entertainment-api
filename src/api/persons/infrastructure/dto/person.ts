// Dependencies
import { Expose, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsDefined } from 'class-validator';

export class PersonDto {
	@Expose()
	address: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	cellPhone: string;

	@Expose()
	city: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	@Type(() => Date)
	dateOfBirth: Date;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	documentNumber: number;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	documentType: number;

	@IsEmail()
	@IsDefined()
	@Expose()
	email: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	firstName: string;

	@Expose()
	gender: number;

	@Expose()
	height: number;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	lastName: string;

	@IsNotEmpty()
	@IsDefined()
	@Expose()
	countryId: number;
}
