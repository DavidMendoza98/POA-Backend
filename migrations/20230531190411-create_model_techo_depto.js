'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('techo_deptos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      monto: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('techo_deptos');
  }
};
