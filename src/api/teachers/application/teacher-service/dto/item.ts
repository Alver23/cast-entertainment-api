// Dependencies
import { Expose, Type } from 'class-transformer';

// Dto's
import { PersonResponseDto } from '@api/persons/application/dto/person';
import { RhythmDto } from '@api/shared/rhythm/application/dto/rhythm';
import { TeacherItemsDto } from './items';

export class TeacherItemDto extends TeacherItemsDto {
	@Expose()
	@Type(() => PersonResponseDto)
	person: PersonResponseDto;

	@Expose({ name: 'rhythm' })
	@Type(() => RhythmDto)
	rhythms: RhythmDto[];
}
