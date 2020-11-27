// Dependencies
import { Transaction } from 'sequelize';

// Entities
import { IArtistEmergencyContact } from '@api/artists/domain/entities/artist-emergency-contact/artist-emergency-contact-entity';
import { IArtistPassport } from '@api/artists/domain/entities/artist-passport/artist-passport-entity';
import { IArtistSkill } from '@api/artists/domain/entities/artist-skills';
import { IArtistBeneficiary } from '@api/artists/domain/entities/artist-beneficiary/artist-beneficiary-entity';

// Models
import { Artist } from '@database/models/artist';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';
import { ArtistEmergencyContactRepository } from '@api/artists/infrastructure/persistence/artist-emergency-contact/artist-emergency-contact-repository';
import { ArtistSkillRepository } from '@api/artists/infrastructure/persistence/artist-skill/artist-skill-repository';
import { ArtistBeneficiaryRepository } from '@api/artists/infrastructure/persistence/artist-beneficiary/artist-beneficiary-repository';
import { ArtistPassportRespository } from '@api/artists/infrastructure/persistence/artist-passport/artist-passport-respository';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';
import { IQueryParams } from '@api/shared/base-crud/domain/repositories/base-crud-repository';

interface IArtistModel extends Artist {
	createEmergencyContact(data, attributes): Promise<any>;
	createPassport(data, attributes): Promise<any>;
}

export class ArtistRepository extends BaseCrudRepository<typeof Artist, IArtist, any> {
	private readonly personRepository: PersonRepository;

	private readonly emergencyContactRepository: ArtistEmergencyContactRepository;

	private readonly skillRepositoty: ArtistSkillRepository;

	private readonly passportRepository: ArtistPassportRespository;

	private readonly beneficiaryRepository: ArtistBeneficiaryRepository;

	constructor() {
		super(Artist);
		this.beneficiaryRepository = new ArtistBeneficiaryRepository();
		this.personRepository = new PersonRepository();
		this.emergencyContactRepository = new ArtistEmergencyContactRepository();
		this.skillRepositoty = new ArtistSkillRepository();
		this.passportRepository = new ArtistPassportRespository();
	}

	async create(data: IArtist): Promise<any> {
		const response = await this.upsert(data);
		return response;
	}

	async findOne({ query }: IQueryParams): Promise<any> {
		return Artist.findOne<Artist>({
			where: query,
			include: [
				{ association: 'person' },
				{ association: 'emergencyContact' },
				{ association: 'passport' },
				{ association: 'beneficiaries' },
				{ association: 'skills' },
			],
		});
	}

	async updateOrCreateEmergencyContact(
		data: IArtistEmergencyContact,
		artistInstance: IArtistModel,
		transaction: Transaction,
	): Promise<void> {
		const { id, personId, relationshipId, ipAddress, ...emergencyContactValues } = data;
		const { id: newPersonId } = await this.personRepository.updateOrCreate(
			{ ...emergencyContactValues, ipAddress },
			personId && { id: personId },
			transaction,
		);

		const { id: emergencyContactId } = await this.emergencyContactRepository.updateOrCreate(
			{ relationshipId, personId: newPersonId, ipAddress },
			id && { id },
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
		const { fullNamesFather, fullNamesMother, nativeLanguage, otherLanguage, personId, ipAddress, ...personValues } = data;

		const { id: newPersonId } = await this.personRepository.updateOrCreate(
			{ ...personValues, ipAddress },
			personId && { id: personId },
			transaction,
		);

		const artistModel = await this.updateOrCreate(
			{ fullNamesFather, fullNamesMother, nativeLanguage, otherLanguage, ipAddress, personId: newPersonId },
			artistId && { id: artistId },
			transaction,
		);

		return artistModel;
	}

	async updateOne(id: number, data: IArtist): Promise<any> {
		const artist = await this.findOne({ query: { id } });
		if (artist) {
			const response = await this.upsert(data, id);
			return response;
		}
		return artist;
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
