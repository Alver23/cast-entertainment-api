// Services
import { ItineraryService } from "../index";

// Shared
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('./../dto/itinerary', () => jest.fn());
jest.mock('./../dto/itinerary/itinerary-list', () => jest.fn());

describe('ItineraryService', () => {
  let service: ItineraryService;

  beforeEach(() => {
    service = new ItineraryService({} as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

});
