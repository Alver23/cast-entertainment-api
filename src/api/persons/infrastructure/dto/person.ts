// Dependencies
import { Expose, Type } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

// Custom Validations
import { IsPersonAlreadyExist } from '@utils/custom-validation/email';

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

	@IsPersonAlreadyExist({
		message: 'The email $value already exists. Choose another email.',
	})
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
