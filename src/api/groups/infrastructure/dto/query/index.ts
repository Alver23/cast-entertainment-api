// Shared
import { QueryParamsDto } from '@api/shared/base-crud/infrastructure/dto/query';
import { Expose, Type } from 'class-transformer';

export class QueryDto extends QueryParamsDto {
	@Type(() => Number)
	@Expose()
	groupId: number[];
}
