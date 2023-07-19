module.exports = (sequelize, Sequelize) => {
    const presupuesto = sequelize.define("presupuesto", {
       idP:{   
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true // Automatically gets converted to SERIAL for postgres
          },
        cantidad: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        costounitario: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        total: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        detalle_tecnico:{
            type: Sequelize.TEXT,
            allowNull: false,
            defaultValue: false
        },
        recurso:{
            type: Sequelize.TEXT,
            allowNull: false,
            defaultValue: false
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return presupuesto;
};
