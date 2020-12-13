// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const TeacherMock = dbMock.define('Teacher', {
  ...mocks,
}, {
  instanceMethods: {
    createRhythm: async () => [],
  }
});

export const teacherMock = {
  Teacher: TeacherMock,
};
