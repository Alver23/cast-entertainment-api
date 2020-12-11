// Dependencies
import { Expose, Type } from 'class-transformer';

// Dto's
import { PersonResponseDto } from '@api/persons/application/dto/person';
import { RhythmDto } from '@api/shared/rhythm/application/dto/rhythm';
import { StudentItemsDto } from './items';
import { TutorDto } from '../tutor';

export class StudentItemDto extends StudentItemsDto {
	@Expose()
	@Type(() => PersonResponseDto)
	person: PersonResponseDto;

	@Expose()
	@Type(() => TutorDto)
	tutor: TutorDto;

	@Expose({ name: 'rhythm' })
	@Type(() => RhythmDto)
	rhythms: RhythmDto[];
}
