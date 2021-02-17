// Dto's

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

// Services
import { artistBeneficiaryService } from '@api/artists/application/beneficiary-service';
import { artistEmergencyContactService } from '@api/artists/application/emergency-contact-service';
import { artistPassportService } from '@api/artists/application/passport-service';
import { skillService } from '@api/artists/application/skill-service';

// Repositories
import { IArtistRepository } from '@api/artists/domain/repositories/artist-repository';
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';
import { ArtistListDto } from './dto/artist-list';
import { ArtistItemDto } from './dto/artist';

export class ArtistService extends BaseCrudService<IArtist, any, IArtistRepository> {
	protected schemaItems = ArtistListDto;

	constructor(repository: IArtistRepository) {
		super(repository);
	}

	async getById(id: number | string): Promise<ArtistItemDto> {
		const response = await super.getById(id);
		const { person, emergencyContact, passport, beneficiaries, skills, ...artistValues } = response;

		const values = {
			...person.dataValues,
			...artistValues.dataValues,
			skills: skillService.transformData(skills),
			emergencyContact: artistEmergencyContactService.transformData(emergencyContact),
			beneficiaries: artistBeneficiaryService.transformData(beneficiaries),
			passport: artistPassportService.transformData(passport),
		};

		return this.hasClassTransformer(ArtistItemDto, values);
	}
}
