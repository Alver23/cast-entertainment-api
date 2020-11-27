// Depedencies
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ArtistSkill {
	@Expose()
	id?: number;

	@IsNumber()
	@Expose()
	skillId: number;
}
