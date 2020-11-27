// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const PersonMock = dbMock.define('Person');
const personMocks = {
  ...mocks,
  dateOfBirth: new Date(),
}

PersonMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (["findAll", "findOrCreate"].includes(query)) return [PersonMock.build(personMocks)];
  if (query === "findOne") return PersonMock.build(personMocks);
});

export const personMock = {
  Person: PersonMock,
};
