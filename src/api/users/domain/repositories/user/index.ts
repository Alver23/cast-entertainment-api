// Shared
import { IBaseCrudRepository } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// Entities
import { IUserEntity } from '@api/users/domain/entities/user';
import { IUserMenu } from '@api/users/domain/entities/menu';

export interface IUserRepository extends IBaseCrudRepository<IUserEntity, IUserEntity> {
	getMenus(id: number): Promise<IUserMenu[]>;
}
