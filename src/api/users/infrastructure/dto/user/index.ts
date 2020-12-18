// Dependencies
import { Expose } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class UserCreatorDto {
	@IsEmail()
	@Expose()
	email: string;

	@IsNotEmpty()
	@Expose()
	cellPhone: string;

	@IsNotEmpty()
	@Expose()
	firstName: string;

	@IsNotEmpty()
	@Expose()
	lastName: string;

	@IsNotEmpty()
	@Expose()
	password: string;

	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	rolesId: number[];

	@Expose()
	ipAddress: string;
}
