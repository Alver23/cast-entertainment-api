// Repository
import { BaseCrudRepository } from "./base-crud-repository";

class FakeRepository extends BaseCrudRepository<any, any, any> {
  constructor(model) {
    super(model);
  }
}

describe('BaseCrudRepository', () => {
  let service: FakeRepository;
  const spy = jest.fn().mockResolvedValue(null);
  const modelMock = {
    create: spy,
    destroy: spy,
    findAll: spy,
    findOne: spy,
    findOrCreate: spy,
    update: spy,
  };

  const cases: any = [
    [
      {
        method: 'create',
        params: { id: 1},
      }
    ],
    [
      {
        method: 'deleteOne',
        params: 1,
        expected: 'destroy'
      }
    ],
    [
      {
        method: 'findAll',
      }
    ],
    [
      {
        method: 'findOne',
        params: { query: { id: 1}},
      }
    ],
    [
      {
        method: 'findOrCreate',
        params: { query: { id: 1}, data: { id: 1}},
      }
    ],
    [
      {
        method: 'updateOne',
        params: { id: 1, data: { id: 1}},
        expected: 'update'
      }
    ]
  ];

  beforeEach(() => {
    service = new FakeRepository(modelMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(cases)('should call the %s method', async ({ method, params, expected}) => {
    await service[method](params);
    expect(
      modelMock[expected || method]
    ).toHaveBeenCalled();
  });

  describe('updateOrCreate method', () => {
    const data = { id: 1 };
    const condition = { id: 2};
    const transaction = null;
    it('should call the method create when the parameter where is empty', async () => {
      await service.updateOrCreate(data, null, transaction);
      expect(
        modelMock.create,
      ).toHaveBeenCalledWith(data, { transaction });
    });

    it('should call the method create when the record no found', async () => {
      await service.updateOrCreate(data, condition, transaction);
      expect(
        modelMock.create,
      ).toHaveBeenCalledWith(data, { transaction });
    });

    it('should call the method update when the record exists', async () => {
      jest.spyOn(modelMock, 'findOne')
        .mockResolvedValue(1);
      await service.updateOrCreate(data, condition, transaction);

      expect(
        modelMock.update,
      ).toHaveBeenCalledWith(data, { where: condition, transaction });
    });

  });

});
