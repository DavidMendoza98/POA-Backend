'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles_permisos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idRol: {
        type: Sequelize.STRING,

      },
      idPermiso: {
          type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles_permisos');
  }
};
