const DataTypes = require('sequelize').DataTypes;
module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleados", {
      dni: {
        type: Sequelize.STRING,
        allowNull: false,
        unique : true,
      },
      num_empleado: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      apellido: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      direccion: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      telefono: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      fechaNacimiento: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      sexo: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      isDelete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
    });
    return Empleado;
  };
  