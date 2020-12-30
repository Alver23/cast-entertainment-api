// Dependencies
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class CatalogUpdaterDto {
	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	parentId: number;

	@ValidateIf((object, value) => isNotNull(value))
	@IsString()
	@IsNotEmpty()
	@Expose()
	name: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsString()
	@IsNotEmpty()
	@Expose()
	description: string;

	@ValidateIf((object, value) => isNotNull(value))
	@IsNumber()
	@Expose()
	orden: number;

	@Expose()
	ipAddress: string;
}
