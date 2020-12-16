// Dependencies
// Mocks
import mocks from './mocks.json';

const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();

const GroupItineraryMock = dbMock.define('GroupItinerary', { ...mocks });

export const groupItineraryMock = {
	GroupItinerary: GroupItineraryMock,
};
