// Dependencies
import { Op } from 'sequelize';

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';
import { ITeacherEntity, ITeacherArtist } from '@api/teachers/domain/entities/teacher';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { Teacher } from '@database/models/teacher';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Repositories
import { ArtistRepository } from '@api/artists/infrastructure/persistence/artist';
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

// Models
import { Rhythm } from '@database/models/rhythm';

// Interfaces
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';
import { ITeacherRepository } from '@api/teachers/domain/repositories/teacher';

export class TeacherRepository extends BaseCrudRepository<typeof Teacher, ITeacherEntity, ITeacherEntity> implements ITeacherRepository {
	private readonly personRepository: PersonRepository;

	readonly artistRepository: ArtistRepository;

	constructor() {
		super(Teacher);
		this.personRepository = new PersonRepository();
		this.artistRepository = new ArtistRepository();
	}

	public async findAll(options?: any): Promise<ITeacherEntity[]> {
		const { filters, ...otherValues } = options;
		let buildOptions = {
			...otherValues,
		};
		if (filters.name) {
			const { attributes, ...values } = this.personRepository.getFilterForFullName(filters.name);
			buildOptions = {
				...buildOptions,
				...values,
				attributes: ['id', 'personId', ...attributes],
			};
		}

		return super.findAll(buildOptions);
	}

	public async findOne({ query }: IQueryParams): Promise<ITeacherEntity> {
		const options = {
			include: [{ association: 'person' }, { association: 'rhythm' }],
		};
		return super.findOne({ query, options });
	}

	public async create(data: ITeacherEntity): Promise<ITeacherEntity> {
		return this.upsert(data);
	}

	public async updateOne(id: number, data: ITeacherEntity): Promise<ITeacherEntity> {
		await super.findOne({ query: { id } });
		return this.upsert(data, id);
	}

	async upsert(data: ITeacherEntity, id?: number): Promise<ITeacherEntity> {
		return sequelize.transaction(async (transaction) => {
			const { nativeLanguage, otherLanguage, personId, ipAddress, rhythms, ...personValues } = data;

			const { id: newPersonId } = await this.personRepository.updateOrCreate(
				{ ...personValues, ipAddress },
				personId && { id: personId },
				transaction,
			);

			const teacher: any = await this.updateOrCreate(
				{ nativeLanguage, otherLanguage, ipAddress, personId: newPersonId },
				id && { id },
				transaction,
			);

			if (rhythms?.length > 0) {
				await Promise.all(
					rhythms.map(async (item) => {
						await Rhythm.destroy({ where: { rhythmableId: teacher.id, rhythmableType: 'teacher' } });
						return teacher.createRhythm({ title: item }, transaction);
					}),
				);
			}

			return teacher;
		});
	}

	async createMany(data: ITeacherArtist): Promise<ITeacherEntity> {
		const { artistIds, ipAddress } = data;
		const options = {
			where: {
				id: {
					[Op.in]: artistIds,
				},
			},
		};

		const { items } = (await this.artistRepository.findAll(options)) as any;
		if (items.length > 0) {
			return (await Promise.all(
				items.map(async (artist: IArtist) => {
					const { nativeLanguage, otherLanguage, personId } = artist;
					const item = await this.model.findOne({ where: { personId } });
					const values = { nativeLanguage, otherLanguage, ipAddress };
					if (item) {
						return this.model.update(values, { where: { id: item.id } });
					}

					return this.create({ ...values, personId } as any);
				}),
			)) as any;
		}
		return [] as any;
	}
}
