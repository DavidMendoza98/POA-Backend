'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tareas_historicos', {
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
      idobjeto: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      objeto: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      idgrupo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
      grupo: {
        type: Sequelize.TEXT,
        allowNull: false
      },idunidad: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
      unidad: {
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable('tareas_historicos');
  }
};
