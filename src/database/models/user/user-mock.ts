// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const userMock = dbMock.define('users', {}, {
  instanceMethods: {
    create: () => jest.fn(),
    findAll: () => jest.fn(),
    findOne: () => jest.fn(),
    findOrCreate: () => jest.fn(),
  },
});

export const mockUser = {
  User: userMock,
}
