module.exports = (sequelize, Sequelize) => {
  const cuentas_mayores = sequelize.define("cuentas_mayores", {
      nombre: {
          type: Sequelize.STRING,
          allowNull: false
      },
      descripcion: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue:''
      },
      identificador: {
          type: Sequelize.STRING,
          allowNull: false
      },
      isDelete: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
      }
  });
  return cuentas_mayores;
};