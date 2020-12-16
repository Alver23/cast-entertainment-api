// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class ItineraryUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	name: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	description: string;

	@Expose()
	ipAddress: string;
}
