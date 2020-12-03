// Dependencies
import { Expose, Type } from 'class-transformer';

export class ArtistPassportResponse {
	@Expose()
	id: number;

	@Expose()
	@Type(() => Date)
	dateOfIssue: Date;

	@Expose()
	@Type(() => Date)
	expirationDate: Date;

	@Expose()
	number: string;
}
