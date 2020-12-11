// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const RhythmMock = dbMock.define('Rhythm', {
  ...mocks,
});

export const rhythmMock = {
  Rhythm: RhythmMock,
};
