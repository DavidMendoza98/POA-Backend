module.exports = (sequelize, Sequelize) => {
    const Poa_Depto = sequelize.define("poa_depto", {
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      }
    });
  
    return Poa_Depto;
  };
  