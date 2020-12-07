// Mocks
import mocks from '@database/models/person/mocks.json';
import userMocks from '@database/models/user/mocks.json';
import roleMocks from '@database/models/role/mocks.json';

const personMocks = {
  ...mocks,
  dateOfBirth: new Date()
}

const timestamps = {
  createdAt: new Date(),
  updatedAt: new Date(),
};


export default class PersonServiceMock {
  findAll() {
    return jest.fn();
  }

  findOne() {
    return {
      ...personMocks,
      getUser: () => ({
        ...userMocks,
        password: '123',
        getRoles: () => ([{...roleMocks, getMenus: async () => []}])
      })
    }
  }

  create() {
    return {
      createUser: () => ({
        toJSON: () => ({...userMocks,...timestamps}),
        addRoles: () => (roleMocks),
      }),
      toJSON: () => ({...personMocks, ...timestamps}),
    }
  }

  findOrCreate() {
    return {
      id: 1,
      toJSON: () => personMocks,
    }
  }

  update() {
    return jest.fn()
  }

  deleteOne() {
    return jest.fn()
  }

}
