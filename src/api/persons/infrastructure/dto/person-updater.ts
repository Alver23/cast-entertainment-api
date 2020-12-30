// Dependencies
import { IsEmail, IsNotEmpty, ValidateIf } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// Custom Validations
import { isNotNull } from '@utils/custom-validation/is-not-null';
import { IsPersonAlreadyExist } from '@utils/custom-validation/email';

export class PersonUpdaterDto {
	@Expose()
	personId: number;

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
	@IsPersonAlreadyExist({
		message: 'The email $value already exists. Choose another email.',
	})
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
