// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const ItineraryMock = dbMock.define('Itinerary', {...mocks});

export const itineraryMock = {
  Itinerary: ItineraryMock,
};
