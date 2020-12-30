// Services
import { CatalogService } from "../index";

// Shared
import { BaseCrudService } from "@api/shared/base-crud/application/base-crud-service";

// Mocks
jest.mock('./../dto/catalog-item', () => jest.fn());
jest.mock('./../dto/catalog-list', () => jest.fn());

describe('CatalogService', () => {
  let service: CatalogService;
  const fakeRepository = {
    getByParentId: jest.fn()
      .mockResolvedValue({ items: [] })
  }

  beforeEach(() => {
    service = new CatalogService(fakeRepository as any);
  });

  it('should get an class instance', () => {
    expect(service).toBeInstanceOf(BaseCrudService)
  });

  describe('getByParentId method', () => {
    it('should get data', async () => {
      const response = await service.getByParentId(1, 1, 10, {});
      expect(response)
        .toEqual(
          expect.objectContaining({
            items: expect.any(Array),
          })
        )
    });
  });

});
