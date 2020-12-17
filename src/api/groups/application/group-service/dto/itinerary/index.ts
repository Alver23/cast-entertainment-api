// Dependencies
import { Expose, Transform } from 'class-transformer';

export class ItineraryDto {
	@Expose()
	@Transform((value, obj) => obj.itinerary.id)
	id: number;

	@Expose()
	@Transform((value, obj) => obj.itinerary.name)
	name: string;

	@Expose()
	@Transform((value, obj) => obj.itinerary.itineraryHasActivity.length)
	activityNumbers: number;
}
