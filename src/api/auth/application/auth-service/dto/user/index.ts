// Dependencies
import { Expose, Transform } from 'class-transformer';

export class UserDto {
	@Expose()
	id: number;

	@Expose()
	firstName: string;

	@Expose()
	lastName: number;

	@Expose()
	email: number;

	@Expose({ groups: ['authenticate'] })
	password: string;

	@Expose()
	@Transform((value, obj) => {
		const newRoles = obj.roles.map(({ name }) => name);
		return newRoles;
	})
	roles: string[];
}
