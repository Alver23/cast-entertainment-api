// Dependencies
import mocks from '../controller/mocks.json';

export const mockPersonService = {
  personServiceInstance: {
    findAll: () => jest.fn(),
    findOne: () => jest.fn(),
    create: () => ({
      createUser: () => ({
        toJSON: () => ({
          id: 1,
          personId: 1,
        }),
      }),
      toJSON: () => mocks,
    }),
    findOrCreate: () => ({
      id: 1,
      toJSON: () => ({
        ...mocks,
      }),
    }),
    update: () => jest.fn(),
    deleteOne: () => jest.fn(),
  }
}
