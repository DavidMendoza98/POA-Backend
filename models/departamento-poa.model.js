module.exports = (sequelize, Sequelize) => {
    const Depto = sequelize.define("depto", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      siglas: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    return Depto;
  };