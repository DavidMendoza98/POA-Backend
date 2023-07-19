'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('presupuestos', 'idHistorico', {
      type: Sequelize.INTEGER,
      allowNull:false,
      defaultValue:1,
      references: {
        model: 'tareas_historicos',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn('presupuestos','idHistorico');
  }
};
