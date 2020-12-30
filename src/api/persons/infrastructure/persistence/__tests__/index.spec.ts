// repositories
import { PersonRepository } from "../person-repository";
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/person', () => require('@database/models/person/person-mock').personMock);
jest.unmock('@api/persons/infrastructure/persistence/person-repository');

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

  describe('getPersonByEmail method', () => {
    const cases = [
      ['fake@fake.com', undefined],
      ['fake2@fake.com', 1]
    ]
    it.each(cases)('should get a person by email when the email to equal %s', async (email: string, personId: number) => {
      const response = await repository.getPersonByEmail(email, personId);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
          })
        )
    });
  });

});
