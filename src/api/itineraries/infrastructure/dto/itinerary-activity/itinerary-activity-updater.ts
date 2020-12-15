// Dependencies
import { Expose } from 'class-transformer';
import { IsNumber, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class ItineraryActivityUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	itineraryId: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	activityId: number;

	@Expose()
	ipAddress: string;
}
