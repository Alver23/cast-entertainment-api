// Dependencies
import { Expose, Type } from 'class-transformer';

export class PaginationParamsDto {
	@Expose()
	@Type(() => Number)
	page: number;

	@Expose()
	@Type(() => Number)
	limit: number;
}
