// Dependencies
import { Expose } from 'class-transformer';

export class ItineraryActivityDto {
	@Expose()
	id: number;

	@Expose()
	itineraryId: number;

	@Expose()
	activityId: number;
}
