// Dependencies
import { Expose, Transform } from 'class-transformer';

export class ArtistDto {
	@Expose()
	id: number;

	@Expose()
	personId: number;

	@Expose()
	@Transform((value, obj) => obj.person.firstName)
	firstName: string;

	@Expose()
	@Transform((value, obj) => obj.person.lastName)
	lastName: string;

	@Expose()
	@Transform((value, obj) => `${obj.person.firstName} ${obj.person.lastName}`)
	fullName: string;
}
