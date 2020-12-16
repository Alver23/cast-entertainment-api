// Dependencies
// Mocks
import mocks from './mocks.json';

const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();

const GroupMock = dbMock.define('Group', {
	...mocks,
});

export const groupMock = {
	Group: GroupMock,
};
