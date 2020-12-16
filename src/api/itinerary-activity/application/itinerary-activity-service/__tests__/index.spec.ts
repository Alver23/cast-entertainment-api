// Services
import { ItineraryActivityService } from "../index";

// Shared
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('../dto/item', () => jest.fn());

describe('ItineraryActivityService', () => {
  let service: ItineraryActivityService;

  beforeEach(() => {
    service = new ItineraryActivityService({} as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

});
