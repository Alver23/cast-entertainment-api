// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const UserMock = dbMock.define('users', {...mocks}, {
  instanceMethods: {
    addRoles: async () => [],
    getRoles: async () => [{id: 1}],
    removeRoles: async () => 1,
  }
});

export const userMock = {
  User: UserMock,
}
