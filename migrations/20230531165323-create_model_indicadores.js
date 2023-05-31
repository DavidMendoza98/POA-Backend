'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('indicadores', {
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
     descripcion:{
         type: Sequelize.TEXT,
         allowNull: false
     },
     cantidadPlanificada: {
         type: Sequelize.INTEGER,
         allowNull: false,
     },
     cantidadEjecutada: {
         type: Sequelize.INTEGER,
         allowNull: true,
     },
     promedioAlcanzado: {
         type: Sequelize.DOUBLE,
         allowNull: true,
     },
     isCantidad:{
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: false
     },
     isPorcentaje: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: false
     },
     isDelete: {
         type: Sequelize.BOOLEAN,
         allowNull: false,
         defaultValue: false
       }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('indicadores');
  }
};
