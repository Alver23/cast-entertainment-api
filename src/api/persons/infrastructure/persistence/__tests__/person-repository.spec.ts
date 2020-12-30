// repositories
import { PersonRepository } from "../person-repository";
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/person', () => require('@database/models/person/person-mock').personMock);

describe('PersonRepository', () => {

  let repository: PersonRepository;

  beforeEach(() => {
    repository = new PersonRepository();
  });

  it('should get an class instance', () => {
    expect(repository).toBeInstanceOf(BaseCrudRepository)
  });

  it('should get filter for full name', () => {
    const response = repository.getFilterForFullName('alver');
    expect(response)
      .toEqual(
        expect.objectContaining({
          attributes: expect.any(Array),
          where: expect.any(Object),
          replacements: expect.any(Object),
          order: expect.any(Array),
        }),
      )
  });

});
