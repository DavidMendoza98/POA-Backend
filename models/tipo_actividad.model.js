module.exports = (sequelize, Sequelize) => {
    const tipo_actividad = sequelize.define("tipo_actividad", {
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    });
  
    return tipo_actividad;
  };