'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('artist_has_beneficiary', {
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
       relationship_id: {
         type: Sequelize.INTEGER.UNSIGNED,
         references: {
           model: {
             tableName: 'catalog',
           },
           key: 'id'
         },
       },
       percentage: Sequelize.DECIMAL(10, 2),
       ip_address: Sequelize.STRING,
       created_at: {
         allowNull: false,
         type: Sequelize.DATE
       },
       updated_at: {
         allowNull: false,
         type: Sequelize.DATE
       }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('artist_has_beneficiary');
  }
};
