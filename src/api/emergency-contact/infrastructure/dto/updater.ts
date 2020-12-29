// Dependencies
import { IsNumber, ValidateIf } from 'class-validator';
import { Expose } from 'class-transformer';

// DTO's
import { PersonUpdaterDto } from '@api/persons/infrastructure/dto/person-updater';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class EmergencyContactUpdaterDto extends PersonUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	relationshipId: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	id: number;

	@IsNumber()
	@Expose()
	personId: number;

	@Expose()
	ipAddress: string;
}
