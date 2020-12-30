// Dependencies
import { IsNumberString } from 'class-validator';
import { Expose } from 'class-transformer';

export class RetrieveDto {
	@IsNumberString()
	@Expose()
	id: number;
}
