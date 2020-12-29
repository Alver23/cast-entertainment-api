// Depedencies
import { Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

export class ArtistSkill {
	@IsNumber()
	@Expose()
	skillId: number;
}
