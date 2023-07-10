'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'empleado_deptos', 
      'isDelete', 
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('empleado_deptos', 'isDelete');
  }
};
