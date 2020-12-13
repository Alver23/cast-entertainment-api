// Dependencies
import { Expose, Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';

// Dto's
import { PersonDto } from '@api/persons/infrastructure/dto/person';
import { TutorDto } from '@api/students/infrastructure/dto/tutor';

export class StudentCreatorDto extends PersonDto {
	@Expose()
	active: boolean;

	@ValidateNested()
	@IsNotEmpty()
	@Expose()
	@Type(() => TutorDto)
	tutor: TutorDto;

	@Expose()
	ipAddress: string;

	@IsArray()
	@IsString({ each: true })
	@Expose()
	rhythms: string[];
}
