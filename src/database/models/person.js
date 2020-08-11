'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Person.init({
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    home_phone: DataTypes.STRING,
    cell_phone: DataTypes.STRING,
    ip_address: DataTypes.STRING,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Person',
  });
  return Person;
};
