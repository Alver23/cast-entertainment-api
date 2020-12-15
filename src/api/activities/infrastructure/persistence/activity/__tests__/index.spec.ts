// Repositories
import { ActivityRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/activity', () => jest.fn());

describe('ActivityRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ActivityRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
