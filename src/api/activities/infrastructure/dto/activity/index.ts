// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class ActivityCreatorDto {
	@IsNotEmpty()
	@Expose()
	name: string;

	@IsNotEmpty()
	@Expose()
	description: string;

	@IsNotEmpty()
	@Expose()
	date: Date;

	@IsNotEmpty()
	@Expose()
	startTime: string;

	@IsNotEmpty()
	@Expose()
	endTime: string;

	@Expose()
	ipAddress: string;
}
