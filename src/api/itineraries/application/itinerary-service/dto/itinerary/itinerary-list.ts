// Dependencies
import { Expose, Transform } from 'class-transformer';

export class ItineraryListDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;

	@Expose()
	@Transform((value, obj) => +obj.dataValues.activitiesNumber)
	activitiesNumber: number;
}
