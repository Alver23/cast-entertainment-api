// repositories
import { ArtistRepository } from "../artist-repository";

// Models
import { Artist } from "@database/models/artist";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';
jest.mock('@database/models/artist', () => require('@database/models/artist/artist-mock').artistMock);
jest.mock('@core/sequelize/sequelize', () => require('@core/sequelize/sequelize-mock').sequelizeMock);

jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/emergency-contact/infrastructure/persistence/emergency-contact-repository', () => ({
  EmergencyContactRepository: class FakeClass {
    async updateOrCreateCustom() {
      return 1
    }
  },
}));
jest.mock('@api/artists/infrastructure/persistence/artist-skill/artist-skill-repository', () => ({
  ArtistSkillRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/artists/infrastructure/persistence/artist-beneficiary/artist-beneficiary-repository', () => ({
  ArtistBeneficiaryRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/artists/infrastructure/persistence/artist-passport/artist-passport-respository', () => ({
  ArtistPassportRespository: require('@mocks/fake-repository').default,
}));

describe('ArtistRepository', () => {
  let repository: ArtistRepository;

  beforeEach(() => {
    repository = new ArtistRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get an class instance', () => {

    expect(
      new ArtistRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

  describe('findOne method', () => {
    it('should call method successfully', async () => {
      const response = await repository.findOne({ query: { id: 1}});
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });
  });

  describe('create method', () => {
    it('should call method successfully when it send all the parameters', async () => {
      const response = await repository.create(mocks.caseOne as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });

    it('should call method successfully when we send all the parameters', async () => {
      const response = await repository.create(mocks.caseTwo as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });
  });

  describe('update method', () => {
    it('should call method successfully when it send all the parameters', async () => {
      const response = await repository.updateOne(1, mocks.caseThree as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });

    it('should get a error when the register not exist', async () => {
      jest.spyOn(Artist, 'findOne')
        .mockResolvedValue(null);

      await expect(repository.updateOne(1, {} as any)).rejects.toThrow();
    });
  });

});
