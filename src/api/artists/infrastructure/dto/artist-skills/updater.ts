// Depedencies
import { Expose } from 'class-transformer';
import { IsNumber, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class ArtistSkillUpdaterDto {
	@Expose()
	id: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	skillId: number;
}
