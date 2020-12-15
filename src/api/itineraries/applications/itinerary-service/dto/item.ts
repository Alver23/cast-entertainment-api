// Dependencies
import { Expose } from 'class-transformer';

export class ItineraryDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;
}
