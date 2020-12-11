// repositories
import { TutorRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/tutor', () => jest.fn());

describe('TutorRepository', () => {

  it('should get an class instance', () => {

    expect(
      new TutorRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
