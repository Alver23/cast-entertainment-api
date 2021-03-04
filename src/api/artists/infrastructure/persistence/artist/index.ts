// Dependencies
import { Transaction, Sequelize } from 'sequelize';

// Entities
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';

// Models
import { Artist } from '@database/models/artist';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';
import { EmergencyContactRepository } from '@api/emergency-contact/infrastructure/persistence/emergency-contact-repository';
import { ArtistSkillRepository } from '@api/artists/infrastructure/persistence/artist-skill/artist-skill-repository';
import { ArtistBeneficiaryRepository } from '@api/artists/infrastructure/persistence/artist-beneficiary/artist-beneficiary-repository';
import { ArtistPassportRespository } from '@api/artists/infrastructure/persistence/artist-passport/artist-passport-respository';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Entities
import { IArtistRepository } from '@api/artists/domain/repositories/artist-repository';
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

interface IArtistModel extends Artist {
	createEmergencyContact(data, attributes): Promise<any>;
	createPassport(data, attributes): Promise<any>;
}

export class ArtistRepository extends BaseCrudRepository<typeof Artist, IArtist, any> implements IArtistRepository {
	private readonly personRepository: PersonRepository;

	private readonly emergencyContactRepository: EmergencyContactRepository;

	private readonly skillRepositoty: ArtistSkillRepository;

	private readonly passportRepository: ArtistPassportRespository;

	private readonly beneficiaryRepository: ArtistBeneficiaryRepository;

	constructor() {
		super(Artist);
		this.beneficiaryRepository = new ArtistBeneficiaryRepository();
		this.personRepository = new PersonRepository();
		this.emergencyContactRepository = new EmergencyContactRepository();
		this.skillRepositoty = new ArtistSkillRepository();
		this.passportRepository = new ArtistPassportRespository();
	}

	async create(data: IArtist): Promise<any> {
		const response = await this.upsert(data);
		return response;
	}

	async findAll(options?: any): Promise<IArtist[]> {
		const { filters, ...otherValues } = options;
		let buildOptions = {
			...otherValues,
		};
		if (filters?.name) {
			const { attributes, ...values } = this.personRepository.getFilterForFullName(filters.name);
			buildOptions = {
				...buildOptions,
				...values,
				attributes: ['id', 'active', 'personId', ...attributes],
			};
		}

		return super.findAll(buildOptions);
	}

	async findOne({ query }: IQueryParams): Promise<any> {
		const options = {
			include: [
				{ association: 'person', include: [{ association: 'groupPerson' }] },
				{ association: 'emergencyContact' },
				{ association: 'passport' },
				{ association: 'beneficiaries' },
				{ association: 'skills' },
			],
		};
		return super.findOne({ query, options });
	}

	async updateOrCreateEmergencyContact(
		data: IArtistEmergencyContact,
		artistInstance: IArtistModel,
		transaction: Transaction,
	): Promise<void> {
		const { id, ipAddress, ...otherValues } = data;
		const { id: emergencyContactId } = await this.emergencyContactRepository.updateOrCreateCustom(
			{ ...otherValues, ipAddress },
			id,
			transaction,
		);
		if (!id) {
			await artistInstance.createEmergencyContact({ emergencyContactId, ipAddress }, { transaction });
		}
	}

	async updateOrCreatePassport(data: IArtistPassport, artistInstance: IArtistModel, transaction: Transaction): Promise<any> {
		const { id } = data;
		if (id) {
			await this.passportRepository.updateOne(id, data);
			return;
		}
		await artistInstance.createPassport({ ...data }, { transaction });
	}

	async updateOrCreateBeneficiary(data: IArtistBeneficiary[], artistInstance: IArtistModel, transaction: Transaction): Promise<any> {
		const { id: artistId } = artistInstance;
		await Promise.all(
			data.map(async (item) => {
				const { id, personId, relationshipId, percentage, ...personValues } = item;
				const { id: newPersonId } = await this.personRepository.updateOrCreate(personValues, personId && { id: personId }, transaction);

				const beneficiaryData = {
					artistId,
					percentage,
					relationshipId,
					personId: newPersonId,
				};
				await this.beneficiaryRepository.updateOrCreate(beneficiaryData, id && { id }, transaction);
			}),
		);
	}

	async updateOrCreateSkills(data: IArtistSkill[], artistInstance: IArtistModel, transaction: Transaction): Promise<any> {
		const { id: artistId } = artistInstance;
		await Promise.all(
			data.map(async (item) => {
				const { id, ...otherValues } = item;
				const skill = { ...otherValues, artistId };
				const condition = id && { id };
				await this.skillRepositoty.updateOrCreate(skill, condition, transaction);
			}),
		);
	}

	async updateOrCreateArtist(data: IArtist, artistId?: number, transaction?: Transaction): Promise<any> {
		const { fullNamesFather, fullNamesMother, nativeLanguage, otherLanguage, active, personId, ipAddress, ...personValues } = data;

		const { id: newPersonId } = await this.personRepository.updateOrCreate(
			{ ...personValues, ipAddress },
			personId && { id: personId },
			transaction,
		);

		const artistModel = await this.updateOrCreate(
			{ fullNamesFather, fullNamesMother, nativeLanguage, otherLanguage, active, ipAddress, personId: newPersonId },
			artistId && { id: artistId },
			transaction,
		);

		return artistModel;
	}

	async updateOne(id: number, data: IArtist): Promise<any> {
		await super.findOne({ query: { id } });
		return this.upsert(data, id);
	}

	async upsert(data: IArtist, id?: number): Promise<any> {
		return sequelize.transaction(async (transaction) => {
			const { beneficiaries, emergencyContact, skills, passport, ipAddress, ...artistValues } = data;
			const artistInstance = await this.updateOrCreateArtist({ ...artistValues, ipAddress }, id, transaction);

			if (emergencyContact) {
				await this.updateOrCreateEmergencyContact({ ...emergencyContact, ipAddress }, artistInstance, transaction);
			}

			if (passport) {
				await this.updateOrCreatePassport({ ...passport, ipAddress }, artistInstance, transaction);
			}

			if (skills?.length > 0) {
				await this.updateOrCreateSkills(skills, artistInstance, transaction);
			}

			if (beneficiaries?.length > 0) {
				await this.updateOrCreateBeneficiary(beneficiaries, artistInstance, transaction);
			}

			return artistInstance;
		});
	}
}
