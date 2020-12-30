// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { PaginationQueryParamsDto } from '@api/shared/base-crud/infrastructure/dto/pagination';

export class QueryParamsDto extends PaginationQueryParamsDto {
	@Expose()
	name: string;
}
