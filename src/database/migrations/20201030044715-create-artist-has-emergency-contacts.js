'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('artist_has_emergency_contact', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      artist_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'artist',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      emergency_contact_id: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'emergency_contact',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      ip_address: Sequelize.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_at: Sequelize.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('artist_has_emergency_contact');
  }
};
