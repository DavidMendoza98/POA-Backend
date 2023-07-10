module.exports = (sequelize, Sequelize) => {
  const categoria = sequelize.define("categorias", {
    categoria: {
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

  return categoria;
};