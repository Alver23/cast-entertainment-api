// repositories
import { EmergencyContactRepository } from "../emergency-contact-repository";

// Models
import { EmergencyContact } from "@database/models/emergency-contact";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';

jest.mock('@database/models/emergency-contact', () => require('@database/models/emergency-contact/emergency-contact-mock').emergencyContactMock);

describe('EmergencyContactRepository', () => {

  let repository: EmergencyContactRepository;

  const expectedProperties = () => ({
    id: expect.any(Number),
    personId: expect.any(Number),
    address: expect.any(String),
    cellPhone: expect.any(String),
    city: expect.any(String),
    dateOfBirth: expect.any(Date),
    documentNumber: expect.any(String),
    email: expect.any(String),
    firstName: expect.any(String),
    lastName: expect.any(String),
    documentType: expect.any(Number),
    gender: expect.any(Number),
    height: expect.any(Number),
    relationshipId: expect.any(Number),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date),
  });

  beforeEach(() => {
    repository = new EmergencyContactRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get an class instance', () => {

    expect(
      new EmergencyContactRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

  describe('create method', () => {
    it('should call method successfully when it send all the parameters', async () => {
      const response = await repository.create(mocks.caseOne as any);
      expect(response)
        .toEqual(
          expect.objectContaining(expectedProperties())
        );
    });
  });

  describe('update method', () => {
    it('should call method successfully when it send all the parameters', async () => {
      const response = await repository.updateOne(1, mocks.caseTwo as any);
      expect(response)
        .toEqual(
          expect.objectContaining(expectedProperties())
        );
    });

    it('should get a error when the register not exist', async () => {
      jest.spyOn(EmergencyContact, 'findOne')
        .mockResolvedValue(null);

      await expect(repository.updateOne(1, {} as any)).rejects.toThrow();
    });

  });

});
