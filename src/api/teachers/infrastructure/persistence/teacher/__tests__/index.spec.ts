// Repositories
import { TeacherRepository } from "../index";
import { ArtistRepository } from "@api/artists/infrastructure/persistence/artist/artist-repository";

// Models
import { Teacher } from "@database/models/teacher";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';
jest.mock('@database/models/rhythm', () => require('@database/models/rhythm/rhythm-mock').rhythmMock);
jest.mock('@database/models/teacher', () => require('@database/models/teacher/teacher-mock').teacherMock);
jest.mock('@core/sequelize/sequelize', () => require('@core/sequelize/sequelize-mock').sequelizeMock);
jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/artists/infrastructure/persistence/artist/artist-repository', () => ({
  ArtistRepository: require('@mocks/fake-repository').default,
}));

describe('TeacherRepository', () => {

  let repository: TeacherRepository;
  let artistRepository: ArtistRepository;

  beforeEach(() => {
    repository = new TeacherRepository();
    artistRepository = new ArtistRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should get an class instance', () => {
    expect(repository).toBeInstanceOf(BaseCrudRepository)
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
  });

  describe('update method', () => {
    it('should call method successfully when it send all the parameters', async () => {
      const response = await repository.updateOne(1, mocks.caseTwo as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });

    it('should get a error when the register not exist', async () => {
      jest.spyOn(Teacher, 'findOne')
        .mockResolvedValue(null);

      await expect(repository.updateOne(1, {} as any)).rejects.toThrow();
    });
  });

  describe('createMany method', () => {
    const artistIds = [1, 2, 3, 4, 5];

    it('should create multiple records succesfully', async () => {
      jest
        .spyOn(Teacher, 'findOne')
        .mockResolvedValue({ id: 1 } as any);
      const response = await repository.createMany({artistIds, ipAddress: '123'});
      expect(response).toHaveLength(2);
    });

    it('should return array empty when the artists no exist', async () => {
      jest
        .spyOn(repository.artistRepository, 'findAll')
        .mockResolvedValue([]);

      const response = await repository.createMany({artistIds, ipAddress: '123'});
      expect(response).toEqual([]);

    });

    it('should create artist when not exist the register', async () => {
      jest
        .spyOn(Teacher, 'findOne')
        .mockResolvedValue(null);

      const response = await repository.createMany({artistIds, ipAddress: '123'});
      expect(response[0])
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });

  });

});
