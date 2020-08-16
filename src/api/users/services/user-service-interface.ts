// Interfaces
import { UserModel } from '@database/models/user/user-interface';
import { PersonModel, PersonRequest } from '@database/models/person/person-interface';

export interface IUserResponse extends UserModel {
	person: PersonModel;
}

export interface IUserService {
	findAll(): Promise<IUserResponse[]>;
	findOne({ query }): Promise<IUserResponse>;
	create(data: PersonRequest): Promise<IUserResponse>;
	findOrCreate(user: PersonRequest): Promise<IUserResponse>;
}
