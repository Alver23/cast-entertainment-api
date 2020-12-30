// Repositories
import { GroupRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';
jest.mock('@database/models/group', () => require('@database/models/group/mock').groupMock);
jest.mock('@database/models/group-itinerary', () => require('@database/models/group-itinerary/mock').groupItineraryMock);
jest.mock('@database/models/group-person', () => require('@database/models/group-person/mock').groupPersonMock);

describe('GroupRepository', () => {

  let repository: GroupRepository;

  beforeEach(() => {
    repository = new GroupRepository();
  });

  it('should get an class instance', () => {
    expect(repository).toBeInstanceOf(BaseCrudRepository)
  });

  describe('findOne method', () => {
    it('should call method successfully', async () => {
      const response = await repository.findOne({ query: { id: 1}});
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
          })
        )
    });
  });

  describe('findAll method', () => {
    const cases = [
      [{filters: {name: 'alver'}}],
      [undefined],
    ];

    it.each(cases)('should get the data whne the parameters to equal %s', async (params) => {
      const mockData: any = {
        attributes: [],
      };

      const response: any = await repository.findAll(params);
      expect(response).toHaveProperty('totalItems', 1);
      expect(response.items).toHaveLength(1);
    });

  });

  describe('create method', () => {
    it('should call method successfully', async () => {
      const response = await repository.create(mocks.caseOne as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
          }),
        )
    });
  });

  describe('update method', () => {
    it('should call method successfully', async () => {
      const response = await repository.updateOne(1, mocks.caseTwo as any);
      expect(response)
        .toEqual(
          expect.objectContaining({
            id: expect.any(Number),
          }),
        )
    });
  });

});
