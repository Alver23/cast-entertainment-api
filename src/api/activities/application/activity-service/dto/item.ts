// Dependencies
import { Expose } from 'class-transformer';

export class ActivityDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;

	@Expose()
	date: Date;

	@Expose()
	startTime: string;

	@Expose()
	endTime: string;
}
