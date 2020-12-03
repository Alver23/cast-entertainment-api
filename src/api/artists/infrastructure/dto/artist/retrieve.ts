// Dependencies
import { IsDefined, IsNumberString } from 'class-validator';
import { Expose } from 'class-transformer';

export class RetrieveArtist {
	@IsNumberString()
	@IsDefined()
	@Expose()
	id: number;
}
