'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('fuentes', [
      {
        nombre: "Ingresos del estado",
        identificador: "11",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Ahorros",
        identificador: "12",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Ingresos propios",
        identificador: "12B",
        createdAt : new Date(),
        updatedAt : new Date()
      }
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('fuentes', null, {});
    
  }
};
