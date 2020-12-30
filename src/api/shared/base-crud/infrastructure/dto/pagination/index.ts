// Dependencies
import { Expose, Type } from 'class-transformer';

export class PaginationQueryParamsDto {
	@Expose()
	@Type(() => Number)
	page: number;

	@Expose()
	@Type(() => Number)
	limit: number;
}
