// Dependencies
const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

// Mocks
import mocks from './mocks.json';

const EmergencyContactMock = dbMock.define('EmergencyContac', {...mocks, dateOfBirth: new Date()});

export const emergencyContactMock = {
  EmergencyContact: EmergencyContactMock,
};
