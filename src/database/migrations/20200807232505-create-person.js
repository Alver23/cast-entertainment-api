'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('people', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      first_name: Sequelize.STRING,
      last_name: Sequelize.STRING,
      email: Sequelize.STRING,
      date_of_birth: Sequelize.DATE,
      address: Sequelize.STRING,
      city: Sequelize.STRING,
      cell_phone: Sequelize.STRING,
      gender: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'catalogs',
          },
          key: 'id'
        },
      },
      document_type: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'catalogs',
          },
          key: 'id'
        },
      },
      document_number: Sequelize.BIGINT(20),
      height: Sequelize.DECIMAL(10, 2),
      ip_address: Sequelize.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('people');
  }
};
