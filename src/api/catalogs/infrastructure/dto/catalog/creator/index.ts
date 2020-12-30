// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class CatalogCreatorDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	parentId: number;

	@IsString()
	@IsNotEmpty()
	@Expose()
	name: string;

	@IsString()
	@IsNotEmpty()
	@Expose()
	description: string;

	@IsNumber()
	@Expose()
	orden: number;

	@Expose()
	ipAddress: string;
}
