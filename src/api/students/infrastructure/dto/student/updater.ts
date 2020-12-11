// Dependencies
import { IsArray, IsNotEmpty, IsNumber, IsString, ValidateIf, ValidateNested } from 'class-validator';
import { Expose, Type } from 'class-transformer';

// Dto's
import { PersonUpdaterDto } from '@api/persons/infrastructure/dto/person-updater';
import { TutorUpdaterDto } from '@api/students/infrastructure/dto/tutor/updater';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class StudentUpdaterDto extends PersonUpdaterDto {
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	personId: number;

	@ValidateNested()
	@Expose()
	@Type(() => TutorUpdaterDto)
	tutor: TutorUpdaterDto;

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsString({ each: true })
	@Expose()
	rhythms: string[];
}
