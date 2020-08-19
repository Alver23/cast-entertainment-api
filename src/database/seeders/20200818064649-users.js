'use strict';

// Dependencies
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        person_id: 1,
        password: await bcrypt.hash('123456789', 10),
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        person_id: 2,
        password: await bcrypt.hash('123456789', 10),
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null);
  }
};
