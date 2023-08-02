'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'actividades', 
      'uploadedIntoSPI', 
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('actividades', 'uploadedIntoSPI');
  }
};
