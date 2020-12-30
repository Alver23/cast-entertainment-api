// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const CatalogMock = dbMock.define('Catalog', { ...mocks });

export const catalogMock = {
	Catalog: CatalogMock,
};
