// Repositories
import { UserRepository } from "../index";

// Shared
import { BaseCrudRepository } from "@api/shared/base-crud/infrastructure/persistence/mysql/base-crud-repository";

// Mocks
import mocks from './mocks.json';
jest.mock('@database/models/user', () => require('@database/models/user/user-mock').userMock);

describe('UserRepository', () => {

  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
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
    it('should call method successfully', async () => {
      const response = await repository.findAll();
      expect(response)
        .toEqual(
          expect.objectContaining({
            items: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(Number),
              })
            ])
          })
        )
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

    it('should call method successfully when getRoles is empty', async () => {
      jest
        .spyOn(repository, 'updateOrCreate')
        .mockImplementation(() => {
          return {
            id: 1,
            getRoles: jest.fn().mockResolvedValue(null),
          } as any
        });

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
