// Services
import { UserService } from "../index";
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
import mocks from './mocks.json'
jest.mock('../dto/user', () => jest.fn());

describe('UserService', () => {

  let service: UserService;
  const fakeRepository = {
    create: jest.fn().mockResolvedValue([]),
    updateOne: jest.fn().mockResolvedValue([]),
    getMenus: jest.fn().mockResolvedValue([...mocks.menus]),
  }

  beforeEach(() => {
    service = new UserService(fakeRepository as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService);
  });

  it('should call create method', async () => {
    const response = await service.create(mocks.user as any);
    expect(response).toEqual([]);
    expect(fakeRepository.create).toHaveBeenCalled();
  });

  it('should call update method', async () => {
    const response = await service.update(1, mocks.user as any);
    expect(response).toEqual([]);
    expect(fakeRepository.updateOne).toHaveBeenCalled();
  });

  it('should call update method whe password is empty', async () => {
    const mockData = {...mocks.user};
    delete mockData.password;
    const response = await service.update(1, mockData as any);
    expect(response).toEqual([]);
    expect(fakeRepository.updateOne).toHaveBeenCalled();
  });

  it('should call getUserMenus method successfully', async () => {
    const response = await service.getUserMenus(1);
    const menus = [...mocks.menus];
    menus.splice(0, 1);
    expect(response).toEqual(menus.reverse());
  });

})
