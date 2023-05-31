'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('mes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mes: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('mes');
  }
};
