'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('medio_verificacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      url: {
          type: Sequelize.TEXT
      },
      nombre_Archivo:{
        type: Sequelize.TEXT,
      },
      isDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('medio_verificacions');
  }
};
