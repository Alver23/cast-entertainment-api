// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const StudentMock = dbMock.define('Student', {
  ...mocks,
}, {
  instanceMethods: {
    createRhythm: async () => [],
  }
});

export const studentMock = {
  Student: StudentMock,
};
