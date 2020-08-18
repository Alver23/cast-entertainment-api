// Database Model
import { Role } from '@database/models/role';

// Interfaces
import { IRoleResponse, IRoleService, IFindParams } from './role-service-interface';

export class RoleService implements IRoleService {
	public async findAll(): Promise<IRoleResponse[]> {
		return Role.findAll<Role>();
	}

	public async findOne({ query }: IFindParams): Promise<IRoleResponse> {
		return Role.findOne<Role>({ where: query });
	}
}

export const roleServiceInstance = new RoleService();
