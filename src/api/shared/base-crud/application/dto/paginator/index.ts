// Dependencies
import { Expose } from 'class-transformer';

export class PaginatorDto<T> {
	@Expose()
	totalItems: number;

	@Expose()
	items: T[];

	@Expose()
	totalPages: number;

	@Expose()
	currentPage: number;
}
