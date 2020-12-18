// Dependencies
import { Expose, Type } from 'class-transformer';

// Dto's
import { PersonDto } from '../person';
import { RoleDto } from '../role';

export class UserDto {
	@Expose()
	id: number;

	@Expose()
	@Type(() => RoleDto)
	roles: RoleDto[];

	@Expose()
	@Type(() => PersonDto)
	person: PersonDto;
}
