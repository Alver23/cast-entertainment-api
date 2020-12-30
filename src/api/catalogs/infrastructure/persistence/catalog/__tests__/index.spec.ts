// Repositories
import { CatalogRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
jest.mock('@database/models/catalog', () => require('@database/models/catalog/mock').catalogMock);

describe('CatalogRepository', () => {

  let repository: CatalogRepository;

  beforeEach(() => {
    repository = new CatalogRepository();
  });

  it('should get an class instance', () => {
    expect(repository).toBeInstanceOf(BaseCrudRepository)
  });

  describe('getByParentId method', () => {
    it('should get data by parent id', async () => {
      const response = await repository.getByParentId(1, {});
      expect(response)
        .toEqual(
          expect.objectContaining({
            items: expect.any(Array),
          })
        );
    });
  });

});
