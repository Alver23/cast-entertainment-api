// Interfaces
import { UserModel } from '@database/models/user/user-interface';
import { RoleModel } from '@database/models/role/role-interface';
import { PersonModel, PersonRequest } from '@database/models/person/person-interface';

export interface IUserResponse extends UserModel {
	person?: PersonModel;
	roles?: RoleModel;
}

export interface IFindParams {
	query: {
		[key: string]: any;
	};
}

export interface IUserService {
	findAll(): Promise<IUserResponse[]>;
	findOne({ query }: IFindParams): Promise<IUserResponse>;
	create(data: PersonRequest): Promise<IUserResponse>;
	findOrCreate(user: PersonRequest): Promise<IUserResponse>;
}
