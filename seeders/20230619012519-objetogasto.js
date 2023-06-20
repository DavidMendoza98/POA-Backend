'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('objetogastos', [
      // PERSONAL PERMANENTE 11000
      {
        nombre: "Sueldos Básicos",
        identificador: 11100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Educación",
        identificador: 11200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Docentes",
        identificador: 11210,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Sueldos Básicos Docentes Administrativos",
        identificador: 11220,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Retribuciones a Personal Directo y de Control",
        identificador: 11300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Adicionales",
        identificador: 11400,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes",
        identificador: 11510,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes",
        identificador: 11520,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes Docentes",
        identificador: 11530,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes Docentes Administrativos",
        identificador: 11540,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes Docentes",
        identificador: 11550,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Complementos",
        identificador: 11600,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Jubilaciones y Pensiones de los empleados y funcionarios del Poder Ejecutivo",
        identificador: 11710,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Previsión del Magisterio",
        identificador: 11720,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Cuota Patronal",
        identificador: 11731,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Regimen de Riesgos Especiales",
        identificador: 11732,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Militar - Reserva Laboral",
        identificador: 11733,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto de Previsión Social de los Empleados de la Universidad Autónoma de Honduras",
        identificador: 11740,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Seguro Social",
        identificador: 11750,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contribuciones al Instituto Nacional de Formación Profesional",
        identificador: 11760,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otras Contribuciones Patronales",
        identificador: 11790,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Dietas",
        identificador: 11800,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Personales",
        identificador: 11990,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // PERSONAL NO PERMANENTE 12000
      {
        nombre: "Sueldos Básicos",
        identificador: 12100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Jornales",
        identificador: 12200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Adicionales",
        identificador: 12300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimotercer mes",
        identificador: 12410,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Decimocuarto mes",
        identificador: 12420,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Contratos Especiales",
        identificador: 12910,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Otros Servicios Personales",
        identificador: 12990,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Asignaciones Familiares",
        identificador: 13000,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // 14000 retribuciones familiares
      {
        nombre: "Horas extraordinarias",
        identificador: 14100,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el exterior",
        identificador: 14200,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el país",
        identificador: 14300,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Gastos de representación en el exterior para funcionarios",
        identificador: 14400,
        idgrupo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      

      

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('objetogastos', null, {});
    
  }
};
