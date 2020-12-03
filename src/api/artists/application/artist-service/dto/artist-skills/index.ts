// Dependencies
import { Expose } from 'class-transformer';

export class ArtistSkillResponse {
	@Expose()
	id?: number;

	@Expose()
	skillId: number;
}
