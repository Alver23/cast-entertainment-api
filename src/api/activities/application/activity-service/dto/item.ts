// Dependencies
import { Expose, Type } from 'class-transformer';

export class ActivityDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;

	@Expose()
	@Type(() => Date)
	date: Date;

	@Expose()
	startTime: string;

	@Expose()
	endTime: string;
}
