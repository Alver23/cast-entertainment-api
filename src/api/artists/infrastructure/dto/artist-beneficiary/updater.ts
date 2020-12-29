// Dependencies
import { IsNotEmpty, ValidateIf } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonUpdaterDto } from '@api/persons/infrastructure/dto/person-updater';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class ArtistBeneficiaryUpdaterDto extends PersonUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@Expose()
	id: number;

	@ValidateIf((object, value) => isNotNull(value))
	@Expose()
	personId: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	percentage: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNotEmpty()
	@Expose()
	relationshipId: number;
}
