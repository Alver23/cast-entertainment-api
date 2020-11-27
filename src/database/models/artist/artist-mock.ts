// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const ArtistMock = dbMock.define('Artist', {
  ...mocks,
}, {
  instanceMethods: {
    createEmergencyContact: async () => [],
    createPassport: async () => [],
  }
});

export const artistMock = {
  Artist: ArtistMock,
};
