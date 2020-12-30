// Dependencies
import { Expose } from 'class-transformer';

// Dto`s
import { CatalogItemDto } from '../catalog-item';

export class CatalogListDto extends CatalogItemDto {
	@Expose()
	parentId: number;

	@Expose()
	orden: number;
}
