module.exports = (sequelize, Sequelize) => {
  const mes = sequelize.define("mes", {
    mes: {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true
    },
    isDelete: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return mes;
};
