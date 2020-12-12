// Dependencies
import { Expose, Transform } from 'class-transformer';

export class TeacherItemsDto {
	@Expose()
	id: number;

	@Expose()
	personId: number;

	@Expose()
	@Transform((value, obj) => `${obj.person.firstName} ${obj.person.lastName}`)
	fullName: string;
}
