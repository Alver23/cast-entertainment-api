// Repositories
import { ItineraryRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/itinerary', () => require('@database/models/itinerary/itinerary-mock').itineraryMock);

describe('ItineraryRepository', () => {

  let repository: ItineraryRepository;

  beforeEach(() => {
    repository = new ItineraryRepository();
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
          })
        )
    });
  });

  describe('findAll method', () => {
    const cases = [
      [{filters: {name: 'alver'}}],
      [undefined],
    ];

    it.each(cases)('should get the data whne the parameters to equal %s', async (params) => {
      const mockData: any = {
        attributes: [],
      };

      const response: any = await repository.findAll(params);
      expect(response).toHaveProperty('totalItems', 1);
      expect(response.items).toHaveLength(1);
    });

  });

});
