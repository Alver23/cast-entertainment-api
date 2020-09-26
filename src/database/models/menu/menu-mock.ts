// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from '../role/mocks.json';

const MenuMock = dbMock.define('menus');

MenuMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
  if (query === 'findAll') return [MenuMock.build(mocks)];
  if (query === 'findOne') return MenuMock.build(mocks);
});

export const menuMock = {
  Menu: MenuMock,
};
