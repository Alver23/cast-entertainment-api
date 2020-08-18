'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        person_id: 1,
        password: '123456789',
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        person_id: 2,
        password: '123456789',
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
