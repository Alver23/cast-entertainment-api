// Dependencies
import { Expose } from 'class-transformer';
import { IsArray, IsNumber } from 'class-validator';

export class TeacherArtistCreatorDto {
	@Expose()
	@IsArray()
	@IsNumber({}, { each: true })
	artistIds: number[];
}
