// Dependencies
import { Expose, Transform } from 'class-transformer';

export class GroupListDto {
	@Expose()
	id: number;

	@Expose()
	name: string;

	@Expose()
	@Transform((value, obj) => obj.dataValues.members.length)
	membersNumber: number;

	@Expose()
	state: boolean;
}
