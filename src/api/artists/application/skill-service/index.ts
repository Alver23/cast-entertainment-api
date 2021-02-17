// Entities
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';

export class SkillService {
	transformData(data): IArtistSkill[] {
		return data.map((item) => {
			const { skill, ...values } = item.toJSON();
			return {
				...values,
				...skill,
			};
		});
	}
}

export const skillService = new SkillService();
