// Repositories
import { ItineraryRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/itinerary', () => jest.fn());

describe('ItineraryRepository', () => {

  it('should get an class instance', () => {

    expect(
      new ItineraryRepository()
    ).toBeInstanceOf(BaseCrudRepository)

  });

});
