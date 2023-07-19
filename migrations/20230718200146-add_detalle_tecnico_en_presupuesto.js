'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
     queryInterface.addColumn('presupuestos','detalle_tecnico',
    {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: false
    }),
    queryInterface.addColumn('presupuestos','recurso',
    {
      type: Sequelize.TEXT,
      allowNull: false,
      defaultValue: false
    })
  ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('presupuestos','detalle_tecnico');
    await queryInterface.removeColumn('presupuestos','recurso');
  }
};
