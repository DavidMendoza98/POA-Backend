module.exports = (sequelize, Sequelize) =>{
    const IndicadoresPoa = sequelize.define("indicadores", {
        nombre: {
           type: Sequelize.TEXT,
           allowNull: false
        },
        descripcion:{
            type: Sequelize.TEXT,
            allowNull: false
        },
        cantidadPlanificada: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        cantidadEjecutada: {
            type: Sequelize.INTEGER,
            allowNull: true,
        },
        promedioAlcanzado: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        isCantidad:{
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isPorcentaje: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
          }
    });

    return IndicadoresPoa;
};