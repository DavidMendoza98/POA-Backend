'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grupogastos', [
      {
        nombre: "Servicios Personales",
        identificador: 1000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Servicios no Personales",
        identificador: 2000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Materiales y Suministros",
        identificador: 3000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Bienes Capitalizables",
        identificador: 4000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Transferencias y Donaciones",
        identificador: 5000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Activos Financieros",
        identificador: 6000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Servicio de la Deuda Pública",
        identificador: 7000,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        nombre: "Otros Gastos",
        identificador: 9000,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('grupogastos', null, {});
    
  }
};