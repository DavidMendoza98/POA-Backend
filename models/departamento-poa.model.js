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
      estructura: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.ENUM('ADMINISTRATIVO','COORDINACIÓN ACADÉMICA', 'COORDINACIÓN REGIONAL', 'DEPARTAMENTO ACADÉMICO', 'SECCIÓN ACADÉMICA','SERVICIOS'),
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    });
  
    return Depto;
  };