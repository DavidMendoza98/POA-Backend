module.exports = (sequelize, Sequelize) => {
    const techo_depto = sequelize.define("techo_depto", {
      monto: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    return techo_depto;
  };