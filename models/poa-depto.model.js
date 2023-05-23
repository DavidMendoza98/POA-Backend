module.exports = (sequelize, Sequelize) => {
    const Poa_Depto = sequelize.define("poa_depto", {
      fuente11: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fuente12: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fuente12B: {
        type: Sequelize.STRING,
        allowNull: false,
      },
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
  