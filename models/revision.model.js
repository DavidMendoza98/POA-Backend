module.exports = (sequelize, Sequelize) => {
    const Revision = sequelize.define("revision", {
      revision: {
        type: Sequelize.TEXT,
        allowNull: false 
      },
      tipo:{
        type: Sequelize.ENUM(['TAREA', 'INDICADOR','PLANIFICACION']),
        allowNull:false
      },
      corregido: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      idForaneo:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    });
  
    return Revision;
  };