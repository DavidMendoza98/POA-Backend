'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('planificacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      fechaInicio: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      fechaFin: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('planificacions');
  }
};
