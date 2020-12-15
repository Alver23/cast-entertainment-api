// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const ItineraryActivityMock = dbMock.define('ItineraryHasActivity', {...mocks});

export const itineraryHasActivityMock = {
  ItineraryHasActivity: ItineraryActivityMock,
};
