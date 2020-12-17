// Dependencies
import { Expose } from 'class-transformer';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString, ValidateIf } from 'class-validator';

// Utils
import { isNotNull } from '@utils/custom-validation/is-not-null';

export class GroupUpdaterDto {
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
	@IsBoolean()
	@IsNotEmpty()
	state: boolean;

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	members: number[];

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	removeMembers: number[];

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	itineraries: number[];

	@ValidateIf((object, value) => isNotNull(value))
	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	removeItineraries: number[];

	@Expose()
	ipAddress: string;
}
