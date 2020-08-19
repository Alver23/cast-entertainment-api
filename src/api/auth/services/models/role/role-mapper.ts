// Interfaces
import { RoleModel } from '@database/models/role/role-interface';
import { IRole } from './role-interface';

export class RoleMapper {
	roles: IRole[];

	constructor(values: RoleModel[]) {
		this.roles = values.map(({ id, name, description }) => ({ id, name, description }));
	}
}
