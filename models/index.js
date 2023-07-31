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
    operatorsAliases: 0,
    logging: false
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// modelos para auth
db.user = require("./usuario.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.permiso = require("./permiso.model.js")(sequelize, Sequelize);
db.roles_permiso = require("./roles_permiso.model")(sequelize, Sequelize);
db.sesion = require("../models/sesion.model")(sequelize, Sequelize);


// modelos para parte administrativa
db.institucion = require("./institucion.model.js")(sequelize, Sequelize);
db.ue = require("./unidadesejec-poa.model.js")(sequelize, Sequelize);
db.depto = require("./departamento-poa.model.js")(sequelize, Sequelize);

// modelos para personal

db.empleado = require("./empleado.model.js")(sequelize, Sequelize);
db.empleado_depto = require("./empleado_depto.model")(sequelize, Sequelize);

// modelos del plan estrategico institucional
db.pei = require("./pei.model.js")(sequelize, Sequelize);
db.dimension = require("./dimension.model.js")(sequelize, Sequelize);
db.objetivos = require("./objetivos.model.js")(sequelize, Sequelize);
db.areas = require("./areas.model.js")(sequelize, Sequelize);
db.resultado = require("./resultados.model.js")(sequelize, Sequelize);

// modelos para planificaciones anuales 
db.poa = require("./poa-poa.model.js")(sequelize, Sequelize);
db.poa_depto = require("./poa-depto.model.js")(sequelize, Sequelize);

// modelos para techos presupuestario de los poas
db.fuente = require("./fuente.model.js")(sequelize, Sequelize);
db.grupogasto= require("./grupogasto.model.js")(sequelize, Sequelize);
db.cuentas_mayores = require("./cuentasmayores.model.js")(sequelize,Sequelize);
db.objetogasto= require("./objetogasto.model.js")(sequelize, Sequelize);

db.techo_ue = require("./techo_ue.model.js")(sequelize,Sequelize)
db.techo_depto = require("./techo_depto.model.js")(sequelize,Sequelize)

// modelos para actividad (pertenecen a un poa_depto)
db.actividad = require("./actividad.model.js")(sequelize, Sequelize);
db.tipo_actividad = require("./tipo_actividad.model")(sequelize, Sequelize);
db.categoria = require("./categoria.model")(sequelize, Sequelize);
db.ACencargados = require("./actividadEncargado.model.js")(sequelize, Sequelize);

// modelos relacionados con actividad
db.tarea = require("./tareas.model.js")(sequelize, Sequelize);
db.tarea_encargado = require("./encargado_tarea.model.js")(sequelize, Sequelize);
db.indicadoresPoa = require("./indicadores_poa.model.js")(sequelize, Sequelize);
db.planificacion = require("./planificacion.model.js")(sequelize, Sequelize);
db.revision = require("./revision.model.js")(sequelize, Sequelize);

// modelos relacionados con tareas
db.tareas_historico = require("./tareas_historico.model.js")(sequelize,Sequelize); // sirve para dar consejos en planificacion
db.presupuesto = require("./presupuesto.model.js")(sequelize,Sequelize);
db.unidadmedida = require("./unidadmedida.model.js")(sequelize, Sequelize);

// modelos relacionados con planificacion
db.trimestre = require("./trimestre.model")(sequelize, Sequelize);
db.mes = require('./mes.model')(sequelize, Sequelize);

//modelos para seguimiento de lo planificado
db.seguimiento_planificacion = require("./seguimiento_planificacion.model.js")(sequelize,Sequelize);
db.seguimiento_tarea = require("./seguimiento_tarea.model.js")(sequelize,Sequelize);
db.medioVerificacion = require("./medioVerificacion.model.js")(sequelize,Sequelize);

// modelos para notificacion de eventos
db.subscriptions = require("../models/subscriptions.model")(sequelize, Sequelize); // para notificaciones push
db.evento = require("../models/evento.model")(sequelize, Sequelize);


db.user.hasMany(db.subscriptions, {
  foreignKey: { name: 'idUser', allowNull: false }
});
db.subscriptions.belongsTo(db.user, {
  foreignKey: { name: 'idUser', allowNull: false }
});

db.user.hasMany(db.evento, {
  foreignKey: { name: 'idUser', allowNull: false }
});
db.evento.belongsTo(db.user, {
  foreignKey: { name: 'idUser', allowNull: false }
});

db.actividad.hasMany(db.evento, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
db.evento.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
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

db.user.hasOne(db.subscriptions, {
  foreignKey: {
    name: 'idUsuario', allowNull: false
  }
});
db.subscriptions.belongsTo(db.user, {
  foreignKey: {
    name: 'idUsuario', allowNull: false
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

// techo presupuestario unidad ejecutora
db.ue.hasMany(db.techo_ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});
db.techo_ue.belongsTo(db.ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});

db.poa.hasMany(db.techo_ue, {
  foreignKey: { name: 'idPoa', allowNull: false }
});
db.techo_ue.belongsTo(db.poa, {
  foreignKey: { name: 'idPoa', allowNull: false }
});

db.grupogasto.hasMany(db.techo_ue, {
  foreignKey: { name: 'idGrupo', allowNull: false }
});
db.techo_ue.belongsTo(db.grupogasto, {
  foreignKey: { name: 'idGrupo', allowNull: false }
});
db.fuente.hasMany(db.techo_ue, {
  foreignKey: { name: 'idFuente', allowNull: false }
});
db.techo_ue.belongsTo(db.fuente, {
  foreignKey: { name: 'idFuente', allowNull: false }
});

// techo presupuestario para el depto
db.ue.hasMany(db.techo_depto, {
  foreignKey: { name: 'idUE', allowNull: false }
});
db.techo_depto.belongsTo(db.ue, {
  foreignKey: { name: 'idUE', allowNull: false }
});

db.poa.hasMany(db.techo_depto, {
  foreignKey: { name: 'idPoa', allowNull: false }
});
db.techo_depto.belongsTo(db.poa, {
  foreignKey: { name: 'idPoa', allowNull: false }
});

db.depto.hasMany(db.techo_depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});
db.techo_depto.belongsTo(db.depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});

db.poa_depto.hasMany(db.techo_depto, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
});
db.techo_depto.belongsTo(db.poa_depto, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
});

db.techo_ue.hasMany(db.techo_depto, {
  foreignKey: { name: 'idTechoUE', allowNull: false }
});
db.techo_depto.belongsTo(db.techo_ue, {
  foreignKey: { name: 'idTechoUE', allowNull: false }
});

db.grupogasto.hasMany(db.techo_depto, {
  foreignKey: { name: 'idGrupo', allowNull: false }
});
db.techo_depto.belongsTo(db.grupogasto, {
  foreignKey: { name: 'idGrupo', allowNull: false }
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
//// UN poa TIENE MUCHOS poa depto(1:N) ////
db.poa.hasMany(db.poa_depto, {
  foreignKey: { name: 'idPoaUE', allowNull: false }
});
db.poa_depto.belongsTo(db.poa, {
  foreignKey: { name: 'idPoaUE', allowNull: false }
});

db.depto.hasMany(db.poa_depto, {
  foreignKey: { name: 'idDepto', allowNull: false }
});
db.poa_depto.belongsTo(db.depto, {
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
db.poa_depto.hasMany(db.actividad, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
});
db.actividad.belongsTo(db.poa_depto, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
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

db.empleado.hasMany(db.tarea_encargado, {
  foreignKey: { name: 'idEmpleado', allowNull: false }
});
db.tarea_encargado.belongsTo(db.empleado, {
  foreignKey: { name: 'idEmpleado', allowNull: false }
});

db.actividad.hasMany(db.tarea_encargado, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
db.tarea_encargado.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});
db.tarea.hasMany(db.tarea_encargado, {
  foreignKey: { name: 'idTarea', allowNull: false }
});
db.tarea_encargado.belongsTo(db.tarea, {
  foreignKey: { name: 'idTarea', allowNull: false }
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

db.grupogasto.hasMany(db.cuentas_mayores, {
  foreignKey: { name: 'idGrupo', allowNull: false }
});
db.cuentas_mayores.belongsTo(db.grupogasto, {
  foreignKey: { name: 'idGrupo', allowNull: false }
});

db.objetogasto.hasMany(db.tareas_historico, {
  foreignKey: { name: 'idobjeto', allowNull: false }
});
db.tareas_historico.belongsTo(db.objetogasto, {
  foreignKey: { name: 'idobjeto', allowNull: false }
});
db.unidadmedida.hasMany(db.tareas_historico, {
  foreignKey: { name: 'idobjeto', allowNull: false }
});
db.tareas_historico.belongsTo(db.unidadmedida, {
  foreignKey: { name: 'idunidad', allowNull: false }
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

db.tareas_historico.hasMany(db.presupuesto, {
  foreignKey: { name: 'idHistorico', allowNull: false }
});
db.presupuesto.belongsTo(db.tareas_historico, {
  foreignKey: { name: 'idHistorico', allowNull: false }
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
// Relaciones para la planificacion
// una actividad muchas planificaciones (vease como % o cant por fecha)
db.actividad.hasMany(db.planificacion, {
  foreignKey: {name : 'idActividad' , 
  allowNull: false }
});
db.planificacion.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', 
  allowNull: false }
});
// un indicador de actividad tiene muchas planificaciones
db.indicadoresPoa.hasMany(db.planificacion, {
  foreignKey: {name : 'idActividad' , 
  allowNull: false }
});
db.planificacion.belongsTo(db.indicadoresPoa, {
  foreignKey: { name: 'idIndicador', 
  allowNull: false }
});

// un trimestre tiene muchos meses
db.trimestre.hasMany(db.mes, {
  foreignKey: {name : 'idTrimestre' , 
  allowNull: false }
});
db.mes.belongsTo(db.trimestre, {
  foreignKey: { name: 'idTrimestre', 
  allowNull: false }
});
// un mes puede tener multiples planificaciones (fecha inicio fin del mes)
db.mes.hasMany(db.planificacion, {
  foreignKey: {name : 'idMes' , 
  allowNull: false }
});
db.planificacion.belongsTo(db.mes, {
  foreignKey: { name: 'idMes', 
  allowNull: false }
});




// relaciones de tipo actividad

db.tipo_actividad.hasMany(db.actividad, {
  foreignKey: {name : 'idTipo' , 
  allowNull: false }
});
db.actividad.belongsTo(db.tipo_actividad, {
  foreignKey: { name: 'idTipo', 
  allowNull: false }
});

db.categoria.hasMany(db.actividad, {
  foreignKey: {name : 'idCategoria' , 
  allowNull: false }
});
db.actividad.belongsTo(db.categoria, {
  foreignKey: { name: 'idCategoria', 
  allowNull: false }
});
////////////// RELACIONES DE POA Y Fuente /////////
//Un poa tiene muchas fuentes, una fuente tiene muchos poa


//Un tarea tiene seguimientos y estos pueden tener muchos medios de verificacion
db.seguimiento_tarea.hasMany(db.medioVerificacion, {
  foreignKey: {name : 'idSeguimiento' , allowNull: false }
});
db.medioVerificacion.belongsTo(db.seguimiento_tarea, {
  foreignKey: { name: 'idSeguimiento', allowNull: false }
});

db.tarea.hasMany(db.seguimiento_tarea, {
  foreignKey: {name : 'idTarea' , allowNull: false }
});
db.seguimiento_tarea.belongsTo(db.tarea, {
  foreignKey: { name: 'idTarea', allowNull: false }
});

db.presupuesto.hasMany(db.seguimiento_tarea, {
  foreignKey: {name : 'idPresupuesto' , allowNull: false }
});
db.seguimiento_tarea.belongsTo(db.presupuesto, {
  foreignKey: { name: 'idPresupuesto', allowNull: false }
});

db.actividad.hasMany(db.seguimiento_tarea, {
  foreignKey: {name : 'idActividad' , allowNull: false }
});
db.seguimiento_tarea.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

db.poa_depto.hasMany(db.seguimiento_tarea, {
  foreignKey: {name : 'idPoaDepto' , allowNull: false }
});
db.seguimiento_tarea.belongsTo(db.poa_depto, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
});

db.mes.hasMany(db.presupuesto, {
  foreignKey: {name : 'idMes' , 
  allowNull: false }
});
db.presupuesto.belongsTo(db.mes, {
  foreignKey: { name: 'idMes', 
  allowNull: false }
});



//Un planificacion tiene seguimientos 


db.planificacion.hasMany(db.seguimiento_planificacion, {
  foreignKey: {name : 'idPlanificacion' , allowNull: false }
});
db.seguimiento_planificacion.belongsTo(db.planificacion, {
  foreignKey: { name: 'idPlanificacion', allowNull: false }
});

db.actividad.hasMany(db.seguimiento_planificacion, {
  foreignKey: {name : 'idActividad' , allowNull: false }
});
db.seguimiento_planificacion.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

db.poa_depto.hasMany(db.seguimiento_planificacion, {
  foreignKey: {name : 'idPoaDepto' , allowNull: false }
});
db.seguimiento_planificacion.belongsTo(db.poa_depto, {
  foreignKey: { name: 'idPoaDepto', allowNull: false }
});


// revision

db.actividad.hasMany(db.revision, {
  foreignKey: {name : 'idActividad' , allowNull: false }
});
db.revision.belongsTo(db.actividad, {
  foreignKey: { name: 'idActividad', allowNull: false }
});

db.resultado.hasMany(db.actividad, {
  foreignKey: { name: 'idResultado', allowNull: false}
});
db.actividad.belongsTo(db.resultado, {
  foreignKey: { name: 'idResultado', allowNull: false}
});


module.exports = db;