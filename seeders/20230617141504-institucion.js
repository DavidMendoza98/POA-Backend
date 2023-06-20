'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Institucions', [
      {
        nombre: 'UNAH',
        descripcion: 'Universidad Nacional Autónoma de Honduras',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Institucions', null, {});
  }
};
