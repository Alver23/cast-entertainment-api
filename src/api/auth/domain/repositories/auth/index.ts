// Entities
import { IPersonEntity } from '@api/persons/domain/entities/person';

export interface IAuthRepository {
	findUserByEmail(email: string): Promise<IPersonEntity>;
}
