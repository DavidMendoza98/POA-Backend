'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('presupuestos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      costounitario: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
      },
      total: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false
      },
      isDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('presupuestos');
  }
};
