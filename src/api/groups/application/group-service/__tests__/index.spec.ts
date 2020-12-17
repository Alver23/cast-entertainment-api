// Services
import { GroupService } from "../index";

// Shared
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('./../dto/group', () => jest.fn());
jest.mock('./../dto/group/group-list', () => jest.fn());

describe('GroupService', () => {
  let service: GroupService;

  beforeEach(() => {
    service = new GroupService({} as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

});
