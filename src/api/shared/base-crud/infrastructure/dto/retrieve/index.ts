// Dependencies
import { IsDefined, IsNumberString } from 'class-validator';
import { Expose } from 'class-transformer';

export class RetrieveDto {
	@IsNumberString()
	@IsDefined()
	@Expose()
	id: number;
}
