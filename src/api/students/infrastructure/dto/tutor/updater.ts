// Dependencies
import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, ValidateIf } from 'class-validator';

// Custom validation
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class TutorUpdaterDto {
	@IsNumber()
	@Expose()
	id: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	names: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsEmail()
	@Expose()
	email: string;

	@Expose()
	cellPhone: string;

	@Expose()
	address: string;

	@Expose()
	city: string;

	@Expose()
	relationshipId: number;

	@Expose()
	countryId: number;
}
