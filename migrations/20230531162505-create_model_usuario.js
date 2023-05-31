'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false, // no permite valores nulos
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false // no permite valores nulos
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false, // no permite valores nulos
        defaultValue: false // establece el valor por defecto en false
      },
      resetToken: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};
