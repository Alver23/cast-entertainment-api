// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';
import personMocks from '@database/models/person/mocks.json';

const userMockWithPerson = {
  ...mocks,
    person: personMocks,
}

const UserMock = dbMock.define('users');

UserMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === "findAll") return [UserMock.build(userMockWithPerson), UserMock.build(userMockWithPerson)];
  if (query === "findOne") return UserMock.build(userMockWithPerson);
  if (query === "findOrCreate") return [UserMock.build(userMockWithPerson)];
});

UserMock.associations = {
  person: personMocks,
}

export const userMock = {
  User: UserMock,
}
