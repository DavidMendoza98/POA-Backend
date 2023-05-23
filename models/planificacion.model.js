module.exports = (sequelize, Sequelize) => {
  const Planificacion = sequelize.define("planificacion", {
    cantidad: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    fechaInicio: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    fechaFin: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    isDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Planificacion;
};
