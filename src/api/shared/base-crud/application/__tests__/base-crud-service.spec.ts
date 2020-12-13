
// Services
import { BaseCrudService } from "../base-crud-service";

// Mocks
import { baseCrudRepositoryMock } from "../../infrastructure/persistence/mysql/base-crud-repository-mock";

class SchemaItem {

}

class FakeService extends BaseCrudService<any, any, any> {

  protected schemaItem = SchemaItem;
  protected schemaItems: undefined;

  constructor(service) {
    super(service);
  }
}

describe('BaseCrudService', () => {
  let service: FakeService;

  beforeEach(() => {
    service = new FakeService(baseCrudRepositoryMock);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const cases: any = [
    [
      {
        method: 'create',
        params: { id: 1},
      }
    ],
    [
      {
        method: 'delete',
        params: 1,
        expected: 'deleteOne'
      }
    ],
    [
      {
        method: 'getAll',
        params: null,
        expected: 'findAll'
      }
    ],
    [
      {
        method: 'getById',
        params: { query: { id: 1}},
        expected: 'findOne'
      }
    ],
    [
      {
        method: 'update',
        params: {id: 1, data: { key: 'fake Key'}},
        expected: 'updateOne'
      }
    ],
  ]

  it.each(cases)('should call the %s method', async ({ method, params, expected }) => {
    await service[method](params);
    expect(
      baseCrudRepositoryMock[expected || method]
    )
      .toHaveBeenCalledTimes(1);
  });
});
