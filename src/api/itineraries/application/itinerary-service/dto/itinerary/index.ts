// Dependencies
import { Expose, Type, Transform } from 'class-transformer';

// Dto's
import { ActivityDto } from '@api/activities/application/activity-service/dto/item';

// Utils
import { objectToClass } from '@utils/plain-tranformer';

export class ItineraryDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;

	@Expose()
	@Type(() => ActivityDto)
	@Transform((value, obj) => {
		const response = obj.itineraryHasActivity || [];
		const activities = response.map(({ activity }) => activity);
		return objectToClass(ActivityDto, activities);
	})
	activities: ActivityDto[];
}
