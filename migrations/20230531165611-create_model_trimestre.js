'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('trimestres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trimestre: {
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
    await queryInterface.dropTable('trimestres');
  }
};
