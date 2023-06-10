module.exports = (sequelize, Sequelize) => {
    const evento = sequelize.define("evento", {
        evento: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tipo: {
            type: Sequelize.ENUM('REVISION', 'REFORMULACION', 'PUBLICACION', 'APROBADO', 'RECHAZADO','SEGUIMIENTO'),
            allowNull: false,
        },
        fecha: {
            type: Sequelize.DATE,
            allowNull: false
        },
        isDelete: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return evento;
};

