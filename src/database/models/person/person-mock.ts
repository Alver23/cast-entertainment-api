// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const mock = dbMock.define('people', {}, {
  instanceMethods: {
    findAll: () => jest.fn(),
    create: () => jest.fn(),
    findOne: () => jest.fn(),
    update: () => jest.fn(),
    destroy: () => jest.fn(),
    findOrCreate: () => jest.fn(),
  },
});

export const mockPerson = {
  Person: mock,
}
