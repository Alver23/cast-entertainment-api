// Dependencies
import { plainToClass } from 'class-transformer';

// Dto's
import { ArtistResponse } from '@api/artists/application/artist-service/dto/artist';

// Entities
import { IArtist } from '@api/artists/domain/entities/artist/artist-entity';

// Services
import { artistBeneficiaryService } from '@api/artists/application/beneficiary-service';
import { artistEmergencyContactService } from '@api/artists/application/emergency-contact-service';
import { artistPassportService } from '@api/artists/application/passport-service';

// Repositories
import { ArtistRepository } from '@api/artists/domain/repositories/artist-repository';
import { BaseCrudService } from '@api/shared/base-crud/application/base-crud-service';

export class ArtistService extends BaseCrudService<IArtist, any> {
	protected schemaItem: undefined;

	protected schemaItems: undefined;

	constructor(repository: ArtistRepository) {
		super(repository);
	}

	async getById(id: number | string): Promise<ArtistResponse> {
		const response = await super.getById(id);
		const { person, emergencyContact, passport, beneficiaries, ...artistValues } = response;
		const values = {
			...person.dataValues,
			...artistValues.dataValues,
			emergencyContact: artistEmergencyContactService.transformData(emergencyContact),
			beneficiaries: artistBeneficiaryService.transformData(beneficiaries),
			passport: artistPassportService.transformData(passport),
		};

		const artistResponse = plainToClass(ArtistResponse, values, { excludeExtraneousValues: true });
		return artistResponse;
	}
}
