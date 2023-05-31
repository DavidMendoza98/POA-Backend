'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('revisions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      revision: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      tipo:{
        type: Sequelize.ENUM(['TAREA', 'INDICADOR','PLANIFICACION']),
        allowNull:false
      },
      corregido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      idForaneo:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('revisions');
  }
};
