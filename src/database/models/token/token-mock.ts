// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const TokenMock = dbMock.define('Token');

export const tokenMock = {
  Token: TokenMock,
}
