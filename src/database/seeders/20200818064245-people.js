'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('people', [
      {
        first_name: "fake first name",
        last_name: "fake last name",
        email: "fake@fake.com",
        date_of_birth: new Date(),
        address: "fake address",
        city: "fake city",
        cell_phone: "fake cell phone",
        ip_address: "127.0.0.1",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: "fake 2 first name",
        last_name: "fake 2 last name",
        email: "fake2@fake.com",
        date_of_birth: new Date(),
        address: "fake 2 address",
        city: "fake 2 city",
        cell_phone: "fake 2 cell phone",
        ip_address: "127.0.0.1",
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('people', null);
  }
};
