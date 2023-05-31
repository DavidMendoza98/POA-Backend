'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('seguimientos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seguimientoTarea: {
        type: Sequelize.STRING
      },
      porcentajeIndicador: {
          type: Sequelize.STRING
      },
      fechaRealizacion: {
          type: Sequelize.DATE
      },
        isDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('seguimientos');
  }
};
