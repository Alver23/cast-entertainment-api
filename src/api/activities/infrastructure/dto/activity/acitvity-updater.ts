// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class ActivityUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	name: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	description: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	date: Date;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	startTime: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	endTime: string;

	@Expose()
	ipAddress: string;
}
