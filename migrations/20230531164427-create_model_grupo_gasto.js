'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('grupogastos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      identificador: {
          type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('grupogastos');
  }
};
