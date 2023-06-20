'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Unidad_Ejecutoras', [
      {
        name: "CURLP",
        descripcion: "Centro Universitario Regional del Litoral Pacífico - UNAH",
        estructura: "0-00-00-00",
        idInstitucion: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Unidad_Ejecutoras', null, {});
  }
};
