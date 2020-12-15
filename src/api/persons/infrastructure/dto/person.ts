// Dependencies
import { Expose, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class PersonDto {
	@Expose()
	address: string;

	@IsNotEmpty()
	@Expose()
	cellPhone: string;

	@Expose()
	city: string;

	@IsNotEmpty()
	@Expose()
	@Type(() => Date)
	dateOfBirth: Date;

	@IsNotEmpty()
	@Expose()
	documentNumber: number;

	@IsNotEmpty()
	@Expose()
	documentType: number;

	@IsEmail()
	@Expose()
	email: string;

	@IsNotEmpty()
	@Expose()
	firstName: string;

	@Expose()
	gender: number;

	@Expose()
	height: number;

	@Expose()
	ipAddress: string;

	@IsNotEmpty()
	@Expose()
	lastName: string;

	@IsNotEmpty()
	@Expose()
	countryId: number;
}
