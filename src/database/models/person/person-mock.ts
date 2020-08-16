// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const PersonMock = dbMock.define('Person', {}, {
  instanceMethods: {
    create: () => jest.fn()
  }
});

PersonMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (["findAll", "findOrCreate"].includes(query)) return [PersonMock.build(mocks)];
  if (query === "findOne") return PersonMock.build(mocks);
});

export const personMock = {
  Person: PersonMock,
}
