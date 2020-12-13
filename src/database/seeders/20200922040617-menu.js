'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('menu', [
      {
        name: 'artists',
        orden: 1,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'students',
        orden: 2,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'groups',
        orden: 3,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'itineraries',
        orden: 4,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'teachers',
        orden: 5,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'users',
        orden: 6,
        ip_address: '127.0.0.1',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('menu', null);
  }
};
