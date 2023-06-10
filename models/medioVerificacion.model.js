module.exports = (sequelize, Sequelize) => {
    const verificacion = sequelize.define("medio_verificacion", {
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
    return verificacion;
  }