module.exports = (sequelize, Sequelize) => {
  const trimestre = sequelize.define("trimestre", {
    trimestre: {
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

  return trimestre;
};
