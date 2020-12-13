// Dependencies
import { IsEmail, IsNotEmpty, ValidateIf } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// Custom validation
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class PersonUpdaterDto {
	@Expose()
	address: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	cellPhone: string;

	@Expose()
	city: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	@Type(() => Date)
	dateOfBirth: Date;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	documentNumber: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	documentType: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsEmail()
	@Expose()
	email: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	firstName: string;

	@Expose()
	gender: number;

	@Expose()
	height: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	lastName: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	countryId: number;
}
