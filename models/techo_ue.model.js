module.exports = (sequelize, Sequelize) => {
    const techo_ue = sequelize.define("techo_ue", {
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
  
    return techo_ue;
  };