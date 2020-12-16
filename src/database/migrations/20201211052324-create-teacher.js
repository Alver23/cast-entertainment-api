'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teacher', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'people',
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
      },
      native_language: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'catalog',
          },
          key: 'id'
        },
      },
      other_language: {
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'catalog',
          },
          key: 'id'
        },
      },
      ip_address: Sequelize.STRING,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teacher');
  }
};
