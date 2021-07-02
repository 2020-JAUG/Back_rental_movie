'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: "userId" });
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    lastName2: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    dateOfBirth: DataTypes.DATE,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    cp: DataTypes.INTEGER,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    token: DataTypes.STRING,
    isActive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};