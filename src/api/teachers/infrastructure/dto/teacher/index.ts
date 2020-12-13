// Dependencies
import { Expose } from 'class-transformer';
import { IsArray, IsString } from 'class-validator';

// Dto's
import { PersonDto } from '@api/persons/infrastructure/dto/person';

export class TeacherCreatorDto extends PersonDto {
	@Expose()
	nativeLanguage?: number;

	@Expose()
	otherLanguage?: number;

	@Expose()
	ipAddress: string;

	@IsArray()
	@IsString({ each: true })
	@Expose()
	rhythms: string[];
}
