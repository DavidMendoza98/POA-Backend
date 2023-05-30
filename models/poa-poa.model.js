module.exports = (sequelize, Sequelize) => {
    const POA = sequelize.define("poa", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      anio: {
        type: Sequelize.STRING(4),
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
        defaultValue: false
      }
    });
  
    return POA;
  };