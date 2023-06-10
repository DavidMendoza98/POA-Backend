module.exports = (sequelize, Sequelize) => {
    const seguimiento = sequelize.define("seguimiento_planificacion", {
        seguimiento: {
            type: Sequelize.STRING
        },
        ejecutado: {
            type: Sequelize.STRING
        },
        fecha: {
            type: Sequelize.DATE
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return seguimiento;
  };