// Repositories
import { ItineraryActivityRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/itinerary-has-activity', () => jest.fn());

describe('ItineraryActivityRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ItineraryActivityRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
