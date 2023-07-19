'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('tareas_historicos', 'idobjeto', {
        type: Sequelize.INTEGER,
        references: {
          model: 'objetogastos',
          key: 'id'
        }
      }),
      queryInterface.changeColumn('tareas_historicos', 'idunidad', {
        type: Sequelize.INTEGER,
        references: {
          model: 'unidadmedidas',
          key: 'id'
        }
      }),
      queryInterface.removeColumn('tareas_historicos', 'objeto'),
      queryInterface.removeColumn('tareas_historicos', 'grupo'),
      queryInterface.removeColumn('tareas_historicos', 'idgrupo'),
      queryInterface.removeColumn('tareas_historicos', 'unidad'),
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('tareas_historicos', 'idobjeto', {
        type: Sequelize.INTEGER
      }),
      queryInterface.changeColumn('tareas_historicos', 'idunidad', {
        type: Sequelize.INTEGER
      })
      ,
      queryInterface.addColumn(
        'tareas_historicos', 
        'objeto', 
        {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue:"",
        }
      ),
      queryInterface.addColumn(
        'tareas_historicos', 
        'grupo', 
        {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue:"",
        }
      ),
      queryInterface.addColumn(
        'tareas_historicos', 
        'idgrupo', 
        {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue:"",
        }
      ),
      queryInterface.addColumn(
        'tareas_historicos', 
        'unidad', 
        {
          type: Sequelize.TEXT,
          allowNull: false,
          defaultValue:"",
        }
      )
    ])
  }
};
