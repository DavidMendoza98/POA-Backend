'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ejecutoras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      
      idInsti: {
        type: Sequelize.INTEGER,
        references: { model: 'institucions', key: 'id' }
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ejecutoras');
  }
};
