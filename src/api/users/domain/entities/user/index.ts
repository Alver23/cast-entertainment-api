// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface IUserEntity extends Partial<IPersonEntity> {
	id?: number;
	personId?: number;
	password: string;
	rolesId?: number[];
	ipAddress: string;
}
