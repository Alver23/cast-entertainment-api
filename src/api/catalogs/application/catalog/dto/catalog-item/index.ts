// Dependencies
import { Expose } from 'class-transformer';

export class CatalogItemDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	description: string;
}
