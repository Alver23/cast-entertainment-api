// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ItineraryCreatorDto {
	@IsNotEmpty()
	@Expose()
	name: string;

	@IsNotEmpty()
	@Expose()
	description: string;

	@Expose()
	ipAddress: string;
}
