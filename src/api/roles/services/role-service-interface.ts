// Interfaces
import { RoleModel } from '@database/models/role/role-interface';

export type IRoleResponse = RoleModel;

export interface IFindParams {
	query: {
		[key: string]: any;
	};
}

export interface IRoleService {
	findAll(): Promise<IRoleResponse[]>;
	findOne({ query }: IFindParams): Promise<IRoleResponse>;
}
