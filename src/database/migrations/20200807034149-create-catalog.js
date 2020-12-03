'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('catalog', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      parent_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'catalog',
          },
          key: 'id'
        },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: Sequelize.STRING,
      ip_address: Sequelize.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('catalog');
  }
};
