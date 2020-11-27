// repositories
import { PersonRepository } from "../person-repository";
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/person', () => require('@database/models/person/person-mock').personMock);

describe('PersonRepository', () => {

  it('should get an class instance', () => {

    expect(
      new PersonRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
