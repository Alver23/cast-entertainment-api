'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'Super Admin',
        description: 'Super System administrator',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Admin',
        description: 'system administrator',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null);
  }
};
