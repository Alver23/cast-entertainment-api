// Dependencies
// Mocks
import mocks from './mocks.json';

const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();

const GroupPersonMock = dbMock.define('GroupPerson', { ...mocks });

export const groupPersonMock = {
	GroupPerson: GroupPersonMock,
};
