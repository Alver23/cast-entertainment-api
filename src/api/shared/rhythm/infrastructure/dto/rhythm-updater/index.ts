// Dependencies
import { Expose } from 'class-transformer';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class RhythmUpdaterDto {
	@IsNumber()
	@Expose()
	id: number;

	@IsNotEmpty()
	@Expose({ name: 'name' })
	title: string;
}
