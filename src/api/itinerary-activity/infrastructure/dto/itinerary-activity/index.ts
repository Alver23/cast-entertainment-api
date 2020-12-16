// Dependencies
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ItineraryActivityCreatorDto {
	@IsNumber()
	@Expose()
	itineraryId: number;

	@IsNumber()
	@Expose()
	activityId: number;

	@Expose()
	ipAddress: string;
}
