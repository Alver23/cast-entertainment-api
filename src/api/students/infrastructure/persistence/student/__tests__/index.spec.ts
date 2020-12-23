// repositories
import { StudentRepository } from "../index";

// Models
import { Student } from "@database/models/student";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';
jest.mock('@database/models/rhythm', () => require('@database/models/rhythm/rhythm-mock').rhythmMock);
jest.mock('@database/models/student', () => require('@database/models/student/student-mock').studentMock);

jest.mock('@api/persons/infrastructure/persistence/person-repository', () => ({
  PersonRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/students/infrastructure/persistence/tutor', () => ({
  TutorRepository: require('@mocks/fake-repository').default,
}));
jest.mock('@api/shared/rhythm/infrastructure/persistence/rhythm', () => ({
  RhythmRepository: require('@mocks/fake-repository').default,
}));

describe('StudentRepository', () => {

  let repository: StudentRepository;

  beforeEach(() => {
    repository = new StudentRepository()
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
    it('should call method successfully when it send firstName', async () => {
      const response = await repository.updateOne(1, mocks.caseTwo as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
            personId: expect.any(Number),
          })
        )
    });

    it('should call method successfully when it send all parameters', async () => {
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
      jest.spyOn(Student, 'findOne')
        .mockResolvedValue(null);

      await expect(repository.updateOne(1, {} as any)).rejects.toThrow();
    });
  });

});
