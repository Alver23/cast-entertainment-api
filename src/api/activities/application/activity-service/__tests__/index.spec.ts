// Services
import { ActivityService } from "../index";

// Shared
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('../dto/item', () => jest.fn());

describe('ActivityService', () => {
  let service: ActivityService;

  beforeEach(() => {
    service = new ActivityService({} as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

});
