// Dependencies
import { Sequelize, Op, Transaction } from 'sequelize';

// Entities
import { IGroupEntity } from '@api/groups/domain/entities/group';

// Repositories
import { IGroupRepository } from '@api/groups/domain/repositories/group';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Group } from '@database/models/group';
import { GroupItinerary } from '@database/models/group-itinerary';
import { GroupPerson } from '@database/models/group-person';

export class GroupRepository extends BaseCrudRepository<typeof Group, IGroupEntity, IGroupEntity> implements IGroupRepository {
	constructor() {
		super(Group);
	}

	private async saveMembers({
		members,
		groupId,
		ipAddress,
		transaction,
	}: {
		members: number[];
		groupId: number;
		ipAddress: string;
		transaction: Transaction;
	}): Promise<void> {
		if (members?.length > 0) {
			await Promise.all(
				members.map((member) => {
					return GroupPerson.create({ personId: member, groupId, ipAddress }, { transaction });
				}),
			);
		}
	}

	private async saveItineraries({
		itineraries,
		groupId,
		ipAddress,
		transaction,
	}: {
		itineraries: number[];
		groupId: number;
		ipAddress: string;
		transaction: Transaction;
	}): Promise<void> {
		if (itineraries?.length > 0) {
			await Promise.all(
				itineraries.map((itinerary) => {
					return GroupItinerary.create({ itineraryId: itinerary, groupId, ipAddress }, { transaction });
				}),
			);
		}
	}

	private async destroyMembers(memberIds: number[], groupId: number): Promise<void> {
		if (memberIds?.length > 0) {
			await GroupPerson.destroy({ where: { personId: { [Op.in]: memberIds }, groupId } });
		}
	}

	private async destroyItineraries(itineraryIds: number[], groupId: number): Promise<void> {
		if (itineraryIds?.length > 0) {
			await GroupItinerary.destroy({ where: { itineraryId: { [Op.in]: itineraryIds }, groupId } });
		}
	}

	async findOne({ query }: IQueryParams): Promise<IGroupEntity> {
		const options = {
			include: [
				{
					association: 'members',
					include: [{ association: 'person' }],
				},
				{
					association: 'itineraries',
					include: [
						{
							association: 'itinerary',
							include: [{ association: 'itineraryHasActivity' }],
						},
					],
				},
			],
		};
		return super.findOne({ query, options });
	}

	async findAll(): Promise<IGroupEntity[]> {
		const options = {
			attributes: {
				include: [[Sequelize.fn('COUNT', Sequelize.col('members.id')), 'membersNumber']],
			},
			include: [{ association: 'members', attributes: [] }],
			group: ['group.id'],
		};

		return super.findAll(options);
	}

	async upsert(data: IGroupEntity, id?: number): Promise<IGroupEntity> {
		return sequelize.transaction(async (transaction) => {
			const { members, removeMembers, removeItineraries, itineraries, ipAddress, ...groupValues } = data;
			const groupInstance = await this.updateOrCreate(groupValues, id && { id }, transaction);

			const { id: groupId } = groupInstance;

			await this.saveMembers({ members, groupId, ipAddress, transaction });

			await this.saveItineraries({ itineraries, groupId, ipAddress, transaction });

			await this.destroyItineraries(removeItineraries, groupId);
			await this.destroyMembers(removeMembers, groupId);

			return groupInstance;
		});
	}
}
