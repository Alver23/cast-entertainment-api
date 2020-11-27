import { Expose, Type } from 'class-transformer';

export class ArtistPassport {
	@Expose()
	id?: number;

	@Expose()
	@Type(() => Date)
	dateOfIssue: Date;

	@Expose()
	@Type(() => Date)
	expirationDate: Date;

	@Expose()
	number: string;
}
