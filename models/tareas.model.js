module.exports = (sequelize, Sequelize) => {
  const tareas = sequelize.define("tareas", {
    nombre: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    correlativo: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    estado: {
      type: Sequelize.ENUM('REVISION', 'APROBADO', 'RECHAZADO'),
      allowNull: false,
    },
    isDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isPresupuesto: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return tareas;
};
