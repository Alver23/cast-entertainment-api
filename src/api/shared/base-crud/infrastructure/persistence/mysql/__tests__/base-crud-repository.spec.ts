// Repository
import { BaseCrudRepository } from "../base-crud-repository";

class FakeRepository extends BaseCrudRepository<any, any, any> {
  constructor(model) {
    super(model);
  }
}

describe('BaseCrudRepository', () => {
  let service: FakeRepository;
  const spy = jest.fn().mockResolvedValue([]);
  const modelMock = {
    name: 'fake mock',
    create: spy,
    destroy: spy,
    findAll: spy,
    findOne: spy,
    findOrCreate: spy,
    update: spy,
  };

  const cases: any = [
    [
      'create',
      { data: { id: 1 } },
      undefined,
    ],
    [
      'deleteOne',
      { id: 1 },
      'destroy',
    ],
    [
      'findAll',
      undefined,
      undefined,
    ],
    [
      'findOne',
      { query: { id: 1}},
      undefined,
    ],
    [
      'findOrCreate',
      { query: { id: 1}, data: { id: 1}},
      undefined,
    ],
    [
      'updateOne',
      { id: 1, data: { id: 1}},
      'update',
    ]
  ];

  beforeEach(() => {
    service = new FakeRepository(modelMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it.each(cases)('should call the %s method', async (method, params, expected) => {
    await service[method]({...params});
    expect(
      modelMock[expected || method],
    ).toHaveBeenCalled();
  });

  it('should call the finAll method when options is empty', async () => {
    await service.findAll();
    expect(modelMock.findOne).toHaveBeenCalledWith({});
  });

  describe('updateOrCreate method', () => {
    const data = { id: 1 };
    const condition = { id: 2};
    const transaction = null;
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call the method create when the parameter where is empty', async () => {
      await service.updateOrCreate(data, null, transaction);
      expect(
        modelMock.create,
      ).toHaveBeenCalledWith(data, { transaction });
    });

    it('should call the method create when the record no found', async () => {
      await service.updateOrCreate(data, condition, transaction);
      expect(
        modelMock.update,
      ).toHaveBeenCalledWith(data, { where: condition, transaction });
    });

  });

});
