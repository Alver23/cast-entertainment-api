// repositories
import { RhythmRepository } from "../rhythm";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/rhythm', () => jest.fn());

describe('RhythmRepository', () => {

  it('should get an class instance', () => {

    expect(
      new RhythmRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
