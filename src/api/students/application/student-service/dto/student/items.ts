// Dependencies
import { Expose, Transform } from 'class-transformer';

export class StudentItemsDto {
	@Expose()
	id: number;

	@Expose()
	active: boolean;

	@Expose()
	personId: number;

	@Expose()
	@Transform((value, obj) => `${obj.person.firstName} ${obj.person.lastName}`)
	fullName: string;
}
