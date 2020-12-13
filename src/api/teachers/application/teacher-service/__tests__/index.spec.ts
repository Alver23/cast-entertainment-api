// Services
import { TeacherService } from "../index";

// Sahred
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('../dto/item', () => jest.fn());
jest.mock('../dto/items', () => jest.fn());

describe('TeacherService', () => {
  let service: TeacherService;

  const fakeRepository = {
    createMany: jest.fn().mockResolvedValue([]),
  }

  beforeEach(() => {
    service = new TeacherService(fakeRepository as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

  it('should create multiple records succesfully', async () => {
    const data = { artistIds: [1], ipAddress: '12'};
    const response = await service.createMany(data);
    expect(response).toEqual([]);
    expect(fakeRepository.createMany).toHaveBeenCalledWith(data);
  });

});
