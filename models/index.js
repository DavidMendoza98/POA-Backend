const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },
    operatorsAliases: 0
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./usuario.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.empleado = require("./empleado.model.js")(sequelize, Sequelize);
db.permiso = require("./permiso.model.js")(sequelize, Sequelize);
db.roles_permiso = require("./roles_permiso.model")(sequelize, Sequelize);
db.empleado_depto = require("./empleado_depto.model")(sequelize, Sequelize);
db.encargadoPOA = require("./encargadoPOA.model")(sequelize, Sequelize);

db.pei = require("./pei.model.js")(sequelize, Sequelize);
db.dimension = require("./dimension.model.js")(sequelize, Sequelize);
db.objetivos = require("./objetivos.model.js")(sequelize, Sequelize);
db.objetivos = require("./objetivos.model.js")(sequelize, Sequelize);
db.institucion = require("./institucion.model.js")(sequelize, Sequelize);
db.resultado = require("./resultados.model.js")(sequelize, Sequelize);
db.areas = require("./areas.model.js")(sequelize, Sequelize);

////Gestion POA
db.objetogasto= require("./objetogasto.model.js")(sequelize, Sequelize);
db.grupogasto= require("./grupogasto.model.js")(sequelize, Sequelize);
db.presupuesto = require("./presupuesto.model.js")(sequelize,Sequelize);
db.tarea = require("./tareas.model.js")(sequelize, Sequelize);
db.fuente = require("./fuente.model.js")(sequelize, Sequelize);
db.unidadmedida = require("./unidadmedida.model.js")(sequelize, Sequelize);
db.fuentePoa = require("./fuentePoa.model.js")(sequelize,Sequelize)
db.ue_presupuesto = require("./ue_presupuesto.model.js")(sequelize,Sequelize)
// planificacion
db.planificacion = require("./planificacion.model")(sequelize, Sequelize);

//revision de tareas
db.revision = require("./revision.model")(sequelize, Sequelize);

////////////////MODULO POA///////////////////////////
db.ue = require("./unidadesejec-poa.model.js")(sequelize, Sequelize);
db.depto = require("./departamento-poa.model.js")(sequelize, Sequelize);
db.poa = require("./poa-poa.model.js")(sequelize, Sequelize);
//db.areas = require("./planificacion.model")(sequelize, Sequelize);
db.actividad = require("./actividad.model.js")(sequelize, Sequelize);
db.ACencargados = require("./actividadEncargado.model.js")(sequelize, Sequelize);
db.objetogasto= require("./objetogasto.model.js")(sequelize, Sequelize);
db.grupogasto= require("./grupogasto.model.js")(sequelize, Sequelize);
db.presupuesto = require("./presupuesto.model.js")(sequelize,Sequelize);
db.tarea = require("./tareas.model.js")(sequelize, Sequelize);
db.fuente = require("./fuente.model.js")(sequelize, Sequelize);
db.unidadmedida = require("./unidadmedida.model.js")(sequelize, Sequelize);
db.indicadoresPoa = require("./indicadores_poa.model.js")(sequelize, Sequelize);
db.tareas_historico = require("./tareas_historico.model.js")(sequelize,Sequelize);
db.fuentePoa = require("./fuentePoa.model.js")(sequelize,Sequelize);
db.seguimiento = require("./seguimiento.model.js")(sequelize,Sequelize);
db.medioVerificacion = require("./medioVerificacion.model.js")(sequelize,Sequelize);

db.sesion = require("../models/sesion.model")(sequelize, Sequelize);

///////////////////////////////index.user.js//////////////////////////////
/////// RELACIÓN DE UNO A UNO /////////
//// UN USUARIO PERTENECE A UN EMPLEADO, UN EMPLEADO TIENE UN USUARIO ////

db.empleado.hasOne(db.user, {
  foreignKey: {
    name: 'idEmpleado', allowNull: false
  }
});
db.user.belongsTo(db.empleado, {
  foreignKey: {
    name: 'idEmpleado', allowNull: false
  }
});
///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UNA INSTITUCION TIENE MUCHOS pei(1:N) ////
// db.institucion.hasMany(db.pei, {
//   foreignKey: { name: 'idInstitucion', allowNull: false }
// });
// db.pei.belongsTo(db.institucion, {
//   foreignKey: { name: 'idInstitucion', allowNull: false }
// });

/////// RELACIÓN DE UNO A MUCHOS /////////
//// UNA DIMENCION PERTENECE A UN PEI, UN PEI TIENE MUCHAS DIMENSIONES ////
db.pei.hasMany(db.dimension, {
  foreignKey: { name: 'idPei', allowNull: false }
});
db.dimension.belongsTo(db.pei, {
  foreignKey: { name: 'idPei', allowNull: false }
});

db.user.hasMany(db.sesion, {
  foreignKey: { name: 'idUsuario', allowNull: false }
});
db.sesion.belongsTo(db.user, {
  foreignKey: { name: 'idUsuario', allowNull: false }
});

/////// RELACIÓN DE UNO A MUCHOS /////////
//// UN EMPLEADO PERTENECE A UNA INSTITUCION, UNA INSTITUCION TIENE MUCHOS EMPLEADOS ////
db.ue.hasMany(db.empleado, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});
db.empleado.belongsTo(db.ue, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});

db.ue.hasMany(db.ue_presupuesto, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});
db.ue_presupuesto.belongsTo(db.ue, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UNA INSTITUCION TIENE MUCHOS pei(1:N) ////
db.institucion.hasMany(db.pei, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});
db.pei.belongsTo(db.institucion, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});


//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN Institucion TIENE MUCHOS POA(1:N) ////
db.institucion.hasMany(db.poa, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});
db.poa.belongsTo(db.institucion, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});

//////// RELACIÓN DE UNO A MUCHOS ////////
//// UNA INSTITUCION TIENE MUCHAS UNIDADES EJECUTORAS(1:N) ////
db.institucion.hasMany(db.ue, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});
db.ue.belongsTo(db.institucion, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});

db.ue.hasMany(db.depto, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});
db.depto.belongsTo(db.ue, {
  foreignKey: { name: 'idUnidadEjecutora', allowNull: false }
});



////////////////////////////////////////////
/////// RELACIÓN DE UNO A MUCHOS /////////
//// UN USUARIO TIENE UN ROL, UN ROL TIENE MUCHOS USUARIOS(1:N)////
db.role.hasMany(db.user, {
  foreignKey: { name: 'idRol', allowNull: false }
});
db.user.belongsTo(db.role, {
  foreignKey: { name: 'idRol', allowNull: false }
});

////////////////////////////////////////////
/////// RELACIÓN DE UNO A MUCHOS /////////
//// UN USUARIO TIENE MUCHAS SESIONES, UN SESION TIENE UN USUARIOS(1:N)////
/*db.user.hasMany(db.sesion, {
  foreignKey: { name: 'idUsuario', allowNull: false }
});
db.sesion.belongsTo(db.user, {
  foreignKey: { name: 'idUsuario', allowNull: false }
});*/

// Relacion de muchos a muchos Roles y Permisos -- Letty
/*
db.permiso.hasMany(db.permiso, {
  primaryKey: { name: 'idPermiso', allowNull: false }
});
db.role.belongsTo(db.role, {
  foreignKey: { name: 'idPermiso', allowNull: false }
});*/

db.permiso.belongsToMany(db.role, {
  through: db.roles_permiso,
  foreignKey: "idRol",
  otherKey: "idPermiso"
});
db.role.belongsToMany(db.permiso, {
  through: db.roles_permiso,
  foreignKey: "idRol",
  otherKey: "idPermiso"
});

// Relacion transaccional empleado depto

db.empleado.belongsToMany(db.depto, {
  through: db.empleado_depto,
  foreignKey: "idDepto",
  otherKey: "idEmpleado"
});
db.depto.belongsToMany(db.empleado, {
  through: db.empleado_depto,
  foreignKey: "idDepto",
  otherKey: "idEmpleado"
});

// Relacion Transaccional encargado POA

db.empleado.belongsToMany(db.poa, {
  through: db.encargadoPOA,
  foreignKey: "idPoa",
  otherKey: "idEmpleado"
});
db.poa.belongsToMany(db.empleado, {
  through: db.encargadoPOA,
  foreignKey: "idPoa",
  otherKey: "idEmpleado"
});



////////////////////////////////////////////
/////// RELACIÓN DE UNO A MUCHOS /////////
//// UNA DIMENSION TIENE UN PEI, UN PEI TIENE MUCHAS DIMENSIONES(1:N)////
db.pei.hasMany(db.dimension, {
  foreignKey: { name: 'idPei', allowNull: false }
});
db.dimension.belongsTo(db.pei, {
  foreignKey: { name: 'idPei', allowNull: false }
});

////////////////////////////////////////////
/////// RELACIÓN DE UNO A MUCHOS /////////
//// UN Objetivo TIENE UNA DIMENSION, UNA DIMENSION TIENE MUCHOS OBJETIVOS(1:N)////
db.dimension.hasMany(db.objetivos, {
  foreignKey: { name: 'idDimension', allowNull: false }
});
db.objetivos.belongsTo(db.dimension, {
  foreignKey: { name: 'idDimension', allowNull: false }
});

////////////////////////////////////////////
/////// RELACIÓN DE UNO A MUCHOS /////////
//// UN Objetivo TIENE UN PEI, UN PEI TIENE MUCHOS OBJETIVOS(1:N)////
db.pei.hasMany(db.objetivos, {
  foreignKey: { name: 'idPei', allowNull: false }
});
db.objetivos.belongsTo(db.pei, {
  foreignKey: { name: 'idPei', allowNull: false }
});

db.role.hasMany(db.user, {
  foreignKey: { name: 'idRol', allowNull: false }
});
db.user.belongsTo(db.role, {
  foreignKey: { name: 'idRol', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN AREA TIENE UN OBJETIVO, UN OBJETIVO TIENE MUCHAS AREAS(1:N) ////
db.objetivos.hasMany(db.areas, {
  foreignKey: { name: 'idObjetivos', allowNull: false }
});
db.areas.belongsTo(db.objetivos, {
  foreignKey: { name: 'idObjetivos', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN AREA TIENE UNA DIMENSIÓN, UNA DIMENSIÓN TIENE MUCHAS AREAS(1:N) ////
db.dimension.hasMany(db.areas, {
  foreignKey: { name: 'idDimension', allowNull: false }
});
db.areas.belongsTo(db.dimension, {
  foreignKey: { name: 'idDimension', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN AREA TIENE UN pei, UN pei TIENE MUCHAS AREAS(1:N) ////
db.pei.hasMany(db.areas, {
  foreignKey: { name: 'idPei', allowNull: false }
});
db.areas.belongsTo(db.pei, {
  foreignKey: { name: 'idPei', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN RESULTADO TIENE UN AREA, UN AREA TIENE MUCHOS RESULTADOS(1:N) ////
db.areas.hasMany(db.resultado, {
  foreignKey: { name: 'idArea', allowNull: false }
});
db.resultado.belongsTo(db.areas, {
  foreignKey: { name: 'idArea', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN RESULTADO TIENE UN OBJETIVO, UN OBJETIVO TIENE MUCHOS RESULTADOS(1:N) ////
db.objetivos.hasMany(db.resultado, {
  foreignKey: { name: 'idObjetivos', allowNull: false }
});
db.resultado.belongsTo(db.objetivos, {
  foreignKey: { name: 'idObjetivos', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN RESULTADO TIENE UNA DIMENSIÓN, UNA DIMENSÓN TIENE MUCHOS RESULTADOS(1:N) ////
db.dimension.hasMany(db.resultado, {
  foreignKey: { name: 'idDimension', allowNull: false }
});
db.resultado.belongsTo(db.dimension, {
  foreignKey: { name: 'idDimension', allowNull: false }
});

///////////////////////////////////////////
//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN RESULTADO TIENE UN PEI, UN PEI TIENE MUCHOS RESULTADOS(1:N) ////
db.pei.hasMany(db.resultado, {
  foreignKey: { name: 'idPei', allowNull: false }
});
db.resultado.belongsTo(db.pei, {
  foreignKey: { name: 'idPei', allowNull: false }
});



//////// RELACIÓN DE UNO A MUCHOS ////////
//// UN DEPARTAMENTO TIENE MUCHOS PEI(1:N) ////
db.depto.hasMany(db.poa, {
  foreignKey: { name: 'idDepto', allowNull: false }
});
db.poa.belongsTo(db.depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});

//////// RELACIÓN DE UNO A MUCHOS ////////
//// UNA UNIDAD EJECUTORA TIENE MUCHOS PEI(1:N) ////
db.ue.hasMany(db.poa, {
  foreignKey: { name: 'idUE', allowNull: false }
});
db.poa.belongsTo(db.ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});
//////////////////////////RELACIONES DE ACTIVIDAD Y ACTIVIDAD ENCARGADO-------
//Una actividad  tiene un resultado, un resultado tiene muchas actividades


db.poa.hasMany(db.actividad, {
  foreignKey: { name: 'idPoa', allowNull: false }
});
db.actividad.belongsTo(db.poa, {
  foreignKey: { name: 'idPoa', allowNull: false }
});



/////////relacion actividad-institucion
db.institucion.hasMany(db.actividad, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});

db.actividad.belongsTo(db.institucion, {
  foreignKey: { name: 'idInstitucion', allowNull: false }
});
///relacion actividad-depto///////////

db.depto.hasMany(db.actividad, {
  foreignKey: { name: 'idDepto', allowNull: false }
});
db.actividad.belongsTo(db.depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});


/////////relacion actividad-institucion
db.ue.hasMany(db.actividad, {
  foreignKey: { name: 'idUE', allowNull: false }
});

db.actividad.belongsTo(db.ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});
////////relacion encargados con empleados
db.empleado.hasMany(db.ACencargados, {
  foreignKey: { name: 'idEmpleado', allowNull: false }
});
db.ACencargados.belongsTo(db.empleado, {
  foreignKey: { name: 'idEmpleado', allowNull: false }
});

db.actividad.hasMany(db.ACencargados, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
db.ACencargados.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
  ///////////////////////


/////----------------------------------------------------------------------

///////////////////////
/// Aqui comienza tareas
/* UN OBJETO DEL GASTO TIENE UN GRUPO DEL GASTO, UN GRUPO DEL GASTO MUCHOS
    OBJETOS DEL GASTO
*/
db.grupogasto.hasMany(db.objetogasto, {
  foreignKey: { name: 'idgrupo', allowNull: false }
});
db.objetogasto.belongsTo(db.grupogasto, {
  foreignKey: { name: 'idgrupo', allowNull: false }
});

/////////////////////////////////////////
////// RELACION DE UNO A MUCHOS /////////
/* UN PRESUPUESTO TIENE UN GRUPO DEL GASTO, UN GRUPO DEL GASTO MUCHOS
    PRESUPUESTOS
*/
db.grupogasto.hasMany(db.presupuesto, {
  foreignKey: { name: 'idgrupo', allowNull: false }
});
db.presupuesto.belongsTo(db.grupogasto, {
  foreignKey: { name: 'idgrupo', allowNull: false }
});
/////////////////////////////////////////
////// RELACION DE UNO A MUCHOS /////////
/* UN PRESUPUESTO TIENE UN GRUPO DEL GASTO, UN GRUPO DEL GASTO MUCHOS
    PRESUPUESTOS
*/
db.objetogasto.hasMany(db.presupuesto, {
  foreignKey: { name: 'idobjeto', allowNull: false }
});
db.presupuesto.belongsTo(db.objetogasto, {
  foreignKey: { name: 'idobjeto', allowNull: false }
});
/////////////////////////////////////////
////// RELACION DE UNO A UNO /////////
/* UNA TAREA TIENE UN PRESUPUESTO, UN PRESUPUESTO TIENE MUCHAS
    TAREAS
*/
db.tarea.hasOne(db.presupuesto, {
  foreignKey: { name: 'idtarea', allowNull: false }
});
db.presupuesto.belongsTo(db.tarea, {
  foreignKey: { name: 'idtarea', allowNull: false }
});
/////////////////////////////////////////
////// RELACION DE UNO A MUCHOS /////////
/* UN PRESUPUESTO TIENE UN GRUPO DEL GASTO, UN GRUPO DEL GASTO MUCHOS
    PRESUPUESTOS
*/
db.fuente.hasMany(db.presupuesto, {
  foreignKey: { name: 'idfuente', allowNull: false }
});
db.presupuesto.belongsTo(db.fuente, {
  foreignKey: { name: 'idfuente', allowNull: false }
});
/////////////////////////////////////////
////// RELACION DE UNO A MUCHOS /////////
/* UN PRESUPUESTO TIENE UN GRUPO DEL GASTO, UN GRUPO DEL GASTO MUCHOS
    PRESUPUESTOS
*/
db.unidadmedida.hasMany(db.presupuesto, {
  foreignKey: { name: 'idunidad', allowNull: false }
});
db.presupuesto.belongsTo(db.unidadmedida, {
  foreignKey: { name: 'idunidad', allowNull: false }
});
/////////////// RELACIONES DE Tareas Y Actividades /////////
//Un indicador tiene una actividad, una actividad tiene muchos indicadores
db.actividad.hasMany(db.tarea, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
db.tarea.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

//////////////////////////RELACIONES DE POA Y Tareas-------
//Una Tarea tiene un POA, un POA tiene muchas tareas


db.poa.hasMany(db.tarea, {
  foreignKey: { name: 'idPoa', allowNull: false }
});
db.tarea.belongsTo(db.poa, {
  foreignKey: { name: 'idPoa', allowNull: false }
});

///Tareas y departamento
db.depto.hasMany(db.tarea, {
  foreignKey: { name: 'idDepto', allowNull: false }
});
db.tarea.belongsTo(db.depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});

db.ue.hasMany(db.tarea, {
  foreignKey: { name: 'idUE', allowNull: false }
});
db.tarea.belongsTo(db.ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});

////////////// RELACIONES DE Indicadores POA Y Actividades /////////
//Un indicador tiene una actividad, una actividad tiene muchos indicadores
db.actividad.hasMany(db.indicadoresPoa, {
  foreignKey: {name : 'idActividad' , allowNull: false }
});
db.indicadoresPoa.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

db.actividad.hasMany(db.planificacion, {
  foreignKey: {name : 'idActividad' , 
  allowNull: false }
});
db.planificacion.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', 
  allowNull: false }
});
////////////// RELACIONES DE POA Y Fuente /////////
//Un poa tiene muchas fuentes, una fuente tiene muchos poa

db.poa.belongsToMany(db.fuente, {
  through: db.fuentePoa,
  foreignKey: "idfuente",
  otherKey: "IdPoa"
});
db.fuente.belongsToMany(db.poa, {
  through: db.fuentePoa,
  foreignKey: "idfuente",
  otherKey: "idPoa"
});
////////////// RELACIONES DE Indicadores POA Y Actividades /////////
//Un tarea tiene un seguimiento, una actividad tiene muchos indicadores
db.medioVerificacion.hasMany(db.seguimiento, {
  foreignKey: {name : 'idMedVer' , allowNull: false }
});
db.seguimiento.belongsTo(db.medioVerificacion, {
  foreignKey: { name: 'idMedVer', allowNull: false }
});

db.tarea.hasMany(db.seguimiento, {
  foreignKey: {name : 'idtarea' , allowNull: false }
});
db.seguimiento.belongsTo(db.tarea, {
  foreignKey: { name: 'idtarea', allowNull: false }
});

db.actividad.hasMany(db.seguimiento, {
  foreignKey: {name : 'idActividad' , allowNull: false }
});
db.seguimiento.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

db.planificacion.hasMany(db.seguimiento, {
  foreignKey: {name : 'idPlanificacion' , allowNull: false }
});
db.seguimiento.belongsTo(db.planificacion, {
  foreignKey: { name: 'idPlanificacion', allowNull: false }
});

db.tarea.hasMany(db.revision, {
  foreignKey: {name : 'idTarea' , allowNull: false }
});
db.revision.belongsTo(db.tarea, {
  foreignKey: { name: 'idTarea', allowNull: false }
});

db.resultado.hasMany(db.actividad, {
  foreignKey: { name: 'idResultado', allowNull: false}
});
db.actividad.belongsTo(db.resultado, {
  foreignKey: { name: 'idResultado', allowNull: false}
});


module.exports = db;