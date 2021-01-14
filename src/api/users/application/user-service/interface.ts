// Entities
import { IUserEntity } from '@api/users/domain/entities/user';

// Shared
import { IBaseCrudService } from '@api/shared/base-crud/application/base-crud-interface';

export interface IUserService extends IBaseCrudService<IUserEntity, IUserEntity> {
	getUserMenus(id: number): Promise<any>;
}
