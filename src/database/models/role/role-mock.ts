// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const RoleMock = dbMock.define('roles');

RoleMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findAll') return [RoleMock.build(mocks)];
  if (query === 'findOne') return RoleMock.build(mocks);
});

export const roleMock = {
  Role: RoleMock,
};
