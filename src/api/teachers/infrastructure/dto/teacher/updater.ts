// Dependencies
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';
import { Expose } from 'class-transformer';

// Dto's
import { PersonUpdaterDto } from '@api/persons/infrastructure/dto/person-updater';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class TeacherUpdaterDto extends PersonUpdaterDto {
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	personId: number;

	@Expose()
	nativeLanguage?: number;

	@Expose()
	otherLanguage?: number;

	@Expose()
	ipAddress: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsString({ each: true })
	@Expose()
	rhythms: string[];
}
