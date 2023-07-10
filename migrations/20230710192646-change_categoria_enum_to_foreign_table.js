'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('actividades', 'categoria'),
      queryInterface.addColumn(
        'actividades', 
        'idCategoria', 
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue:1,
          references: {
            model: 'categorias', 
            key: 'id', 
          }
        }
      )
    ]);
  },

  async down (queryInterface, Sequelize) {
    
    return Promise.all([
      queryInterface.addColumn(
        'actividades', // table name
        'categoria', // new field name
        {
          type: Sequelize.ENUM('PROGRAMAS/PROYECTOS', 'OPERACIONES'),
          allowNull: false,
          defaultValue:'PROGRAMAS/PROYECTOS'
        }
      ),
      queryInterface.removeColumn('actividades', 'idCategoria')
    ]);
  }
};
