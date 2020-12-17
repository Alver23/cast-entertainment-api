// Shared
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

// Entities
import { IGroupEntity } from '@api/groups/domain/entities/group';

// Repositories
import { IGroupRepository } from '@api/groups/domain/repositories/group';
import { IGroupService } from '@api/groups/application/group-service/interface';

// Dto's
import { GroupDto } from './dto/group';
import { GroupListDto } from './dto/group/group-list';

export class GroupService extends BaseCrudService<IGroupEntity, IGroupEntity, IGroupRepository> implements IGroupService {
	protected schemaItem = GroupDto;

	protected schemaItems = GroupListDto;

	constructor(repository: IGroupRepository) {
		super(repository);
	}
}
