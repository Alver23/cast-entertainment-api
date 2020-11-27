// Entities
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';

// Models
import { ArtistHasSkill } from '@database/models/artist-has-skills';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

export class ArtistSkillRepository extends BaseCrudRepository<typeof ArtistHasSkill, IArtistSkill, IArtistSkill> {
	constructor() {
		super(ArtistHasSkill);
	}
}
