'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activity', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      name: Sequelize.STRING,
      description: Sequelize.TEXT,
      date: Sequelize.DATEONLY,
      start_time: Sequelize.TIME,
      end_time: Sequelize.TIME,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activity');
  }
};
