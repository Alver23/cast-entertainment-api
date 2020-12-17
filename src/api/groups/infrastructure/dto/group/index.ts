// Dependencies
import { Expose, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GroupCreatorDto {
	@IsString()
	@IsNotEmpty()
	@Expose()
	name: string;

	@IsString()
	@IsNotEmpty()
	@Expose()
	description: string;

	@IsBoolean()
	@IsNotEmpty()
	@Expose()
	@Type(() => Boolean)
	state: boolean;

	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	members: number[];

	@IsArray()
	@IsNumber({}, { each: true })
	@Expose()
	itineraries: number[];

	@Expose()
	ipAddress: string;
}
