'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cuentasMayores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      identificador: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      }
      ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idGrupo:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'grupogastos', 
          key: 'id', 
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cuentasMayores');
  }
};