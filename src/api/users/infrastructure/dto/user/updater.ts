// Dependencies
import { Expose } from 'class-transformer';
import { IsArray, IsEmail, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class UserUpdaterDto {
	@IsNumber()
	@Expose()
	personId: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsEmail()
	@Expose()
	email: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	cellPhone: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	firstName: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	lastName: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	password: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	rolesId: number[];

	@Expose()
	ipAddress: string;
}
