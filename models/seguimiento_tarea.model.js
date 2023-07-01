module.exports = (sequelize, Sequelize) => {
    const seguimiento = sequelize.define("seguimiento_tarea", {
        seguimiento: {
            type: Sequelize.STRING
        },
        monto_ejecutado: {
            type: Sequelize.DECIMAL,
            allowNull: false,
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return seguimiento;
  };