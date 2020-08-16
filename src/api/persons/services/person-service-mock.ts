// Mocks
import personMocks from '@database/models/person/mocks.json';
import userMocks from '@database/models/user/mocks.json';

const timestamps = {
  createdAt: new Date(),
  updatedAt: new Date(),
};

export const personServiceMock = {
  personServiceInstance: {
    findAll: () => jest.fn(),
    findOne: () => jest.fn(),
    create: () => ({
      createUser: () => ({
        toJSON: () => ({...userMocks,...timestamps}),
      }),
      toJSON: () => ({...personMocks, ...timestamps}),
    }),
    findOrCreate: () => ({
      id: 1,
      toJSON: () => personMocks,
    }),
    update: () => jest.fn(),
    deleteOne: () => jest.fn(),
  }
}