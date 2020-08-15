// Models
import { PersonModel, PersonRequest } from '../../../database/models/person/person-interface';
import { UserModel } from '../../../database/models/user/user-interface';

export interface IUserService {
	findAll();
	findOne({ query });
	create(data: PersonRequest);
	findOrCreate(user: PersonRequest);
}

export interface IUserResponse extends UserModel {
	person: PersonModel;
}
