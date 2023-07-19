
module.exports = (sequelize, Sequelize) => {
    const tareas_historico = sequelize.define("tareas_historico", {
      nombre: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    });
    return tareas_historico;
  }