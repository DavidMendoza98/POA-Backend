module.exports = (sequelize, Sequelize) => {
    const UE = sequelize.define("Unidad_Ejecutora", {
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
      }
    });
  
    return UE;
  };