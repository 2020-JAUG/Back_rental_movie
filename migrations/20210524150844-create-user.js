'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        require: true
      },
      lastName: {
        type: Sequelize.STRING,
        require: true
      },
      lastName2: {
        type: Sequelize.STRING,
        require: true
      },
      password: {
        type: Sequelize.STRING,
        require: true
      },
      token: {
        type: Sequelize.STRING,
        defaultValue: ""
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        require: true
      },
      city: {
        type: Sequelize.STRING,
        require: true
      },
      address: {
        type: Sequelize.STRING,
        require: true
      },
      cp: {
        type: Sequelize.INTEGER,
        require: true
      },
      email: {
        type: Sequelize.STRING,
        require: true
      },
      phone: {
        type: Sequelize.STRING,
        require: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};