
module.exports = (sequelize, Sequelize) => {
    const TCencargados = sequelize.define("Empleado_Tarea", {

        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }

    });
    return TCencargados;
};
