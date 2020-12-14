// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const ActivityMock = dbMock.define('Activity', {
  ...mocks,
});

export const activityMock = {
  Activity: ActivityMock,
};
