// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import userMock from '@database/models/user/mocks.json';
import personMock from '@database/models/person/mocks.json';

const TokenMock = dbMock.define('tokens');

TokenMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findOne') {
    return TokenMock.build({
      ...userMock,
      user: ({
        getPerson: () => ({...personMock}),
        getRoles: () => null,
        toJSON: () => ({...userMock}),
      }),
    });
  }
});

export const tokenMock = {
  Token: TokenMock,
}
