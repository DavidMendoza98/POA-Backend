'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('empleados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dni: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fechaNacimiento: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('empleados');
  }
};
