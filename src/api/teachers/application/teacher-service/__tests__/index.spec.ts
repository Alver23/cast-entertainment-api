// Services
import { TeacherService } from "../index";

// Sahred
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('../dto/item', () => jest.fn());
jest.mock('../dto/items', () => jest.fn());

describe('TeacherService', () => {
  let service: TeacherService;

  beforeEach(() => {
    service = new TeacherService({} as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

});
