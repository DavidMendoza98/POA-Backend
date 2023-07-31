'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('seguimiento_tareas', 'idPresupuesto', {
      type: Sequelize.INTEGER,
      allowNull:false,
      references: {
        model: 'presupuestos',
        key: 'idP'
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('seguimiento_tareas','idPresupuesto');
  }
};
