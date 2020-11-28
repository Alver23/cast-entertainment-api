// Entities
import { Transaction } from 'sequelize';
import { IEmergencyContact } from '@api/emergency-contact/domain/entities/emergency-contact-entity';

// ORM
import { sequelize } from '@core/sequelize/sequelize';

// Models
import { EmergencyContact } from '@database/models/emergency-contact';

// Shared
import { BaseCrudRepository } from '@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository';

// Repositories
import { PersonRepository } from '@api/persons/infrastructure/persistence/person-repository';

export class EmergencyContactRepository extends BaseCrudRepository<typeof EmergencyContact, IEmergencyContact, IEmergencyContact> {
	private readonly personRepository: PersonRepository;

	constructor() {
		super(EmergencyContact);
		this.personRepository = new PersonRepository();
	}

	async create(data: IEmergencyContact): Promise<any> {
		const response = await this.upsert(data);
		return response;
	}

	async updateOne(id: number, data: IEmergencyContact): Promise<any> {
		const emergencyContact = await this.findOne({ query: { id } });
		if (emergencyContact) {
			const response = await this.upsert(data, id);
			return response;
		}

		return emergencyContact;
	}

	async updateOrCreateCustom(data: IEmergencyContact, id?: number, transaction?: Transaction): Promise<any> {
		const { personId, relationshipId, ipAddress, ...personValues } = data;

		const { id: newPersonId } = await this.personRepository.updateOrCreate(
			{ ...personValues, ipAddress },
			personId && { id: personId },
			transaction,
		);

		const emergencyContactInstance = await this.updateOrCreate(
			{ relationshipId, personId: newPersonId, ipAddress },
			id && { id },
			transaction,
		);

		return emergencyContactInstance;
	}

	async upsert(data: IEmergencyContact, id?: number): Promise<any> {
		return sequelize.transaction(async (transaction) => {
			const emergencyContactInstance = await this.updateOrCreateCustom(data, id, transaction);
			return emergencyContactInstance;
		});
	}
}
