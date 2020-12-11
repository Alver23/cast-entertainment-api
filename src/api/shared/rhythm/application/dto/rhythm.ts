// Dependencies
import { Expose } from 'class-transformer';

export class RhythmDto {
	@Expose()
	id: number;

	@Expose({ name: 'title' })
	name: string;
}
