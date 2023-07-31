const db = require("../models");
const { Op, DataTypes, Model, and, or } = require("sequelize");

const get_all_departamento = async (req, res) => {
    try {
        const all_depto = await db.depto.findAll({
            where: { isDelete: false,
                    id:req.params.id
                    },
                    include:[{model:db.depto},[{model:db.actividad,include:[                       
                        {model:db.tarea,include:[{model:db.presupuesto,include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente,      
                        }
                      ]}]} 
                    ]
                    
                    
        }]],
                                  
        });
        if (!all_depto) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_depto);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const get_all_poa_by_idDepto = async (req, res) => {
    try {
        const all_poas = await db.poa.findAll(
            {
                where: {
                    isDelete: false,
                    idDepto: req.params.idDepto,
                    id:req.params.id
                },
                include:[{model:db.actividad}]
                //     ,include:                       
                //     {model:db.tarea,include:[{model:db.presupuesto,include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}
                //   ]}]}  
            }
        );
        if (!all_poas) {
            return res.status(404).send({ message: 'No hay ningún elemento' });
        }
        return res.status(200).json(all_poas);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const AllTarea_by_depto_poa = async(req,res) => { 
    try{ 
      const allTarea =  await db.tarea.findAll({
      where: {
          isDelete: false,
          idPoa: req.params.idPoa,
          idDepto: req.params.idDepto
      },
      include:[{model:db.actividad,include:[{model:db.indicadoresPoa},{model:db.resultado, include:[{model:db.areas},{model:db.objetivos},{model:db.dimension},{model:db.pei}]},{model:db.planificacion},{model:db.ACencargados,include:[{model:db.empleado}]}]},{model:db.poa},{model:db.depto},{model:db.presupuesto, include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}
    ],order: [
      // will return `name`
      ['createdAt','DESC']]
   
      
    })
    res.status(200).json( allTarea );
  } catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
  }
  };

  const suma_Fuente11 = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const sumaFuente11 =  await db.tarea.findAll({
        where: {
            isDelete: false,
            isPresupuesto: true,
            idPoa: req.params.idPoa
            },
            include:[{model:db.actividad},{model:db.poa},{model:db.depto},{model:db.presupuesto,
                where:{ idfuente:{[Op.eq]: 1 } },
                include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}]
    })
      res.status(200).json( sumaFuente11 );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }
  
  const suma_Fuente12 = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const sumaFuente11 =  await db.tarea.findAll({
        where: {
            isDelete: false,
            isPresupuesto: true,
            idPoa: req.params.idPoa
            },
            include:[{model:db.actividad},{model:db.poa},{model:db.depto},{model:db.presupuesto,
                where:{ idfuente:{[Op.eq]: 2 } },
                include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}]
    })
      res.status(200).json( sumaFuente11 );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const suma_Fuente12B = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const sumaFuente11 =  await db.tarea.findAll({
        where: {
            isDelete: false,
            isPresupuesto: true,
            idPoa: req.params.idPoa
            },
            include:[{model:db.actividad},{model:db.poa},{model:db.depto},{model:db.presupuesto,
                where:{ idfuente:{[Op.eq]: 3 } },
                include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}]
    })
      res.status(200).json( sumaFuente11 );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Tareas_sin_presupuesto = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const sumaFuente11 =  await db.tarea.findAll({
        where: {
            isDelete: false,
            isPresupuesto: false,
            idPoa: req.params.idPoa
            },
            include:[{model:db.actividad},{model:db.poa},{model:db.depto},{model:db.presupuesto,
                include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}]
    })
      res.status(200).json( sumaFuente11 );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Tareas_con_presupuesto = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const sumaFuente11 =  await db.tarea.findAll({
        where: {
            isDelete: false,
            isPresupuesto: true,
            idPoa: req.params.idPoa
            },
            include:[{model:db.actividad},{model:db.poa},{model:db.depto},{model:db.presupuesto,
                include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}]
    })
      res.status(200).json( sumaFuente11 );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }



  const Actvidades = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }
  const Actvidades_estadoF = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            estado:'FORMULACION',
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Actvidades_estadoRF = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            estado:'REFORMULACION',
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Actvidades_estadoR = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            estado:'REVISION',
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Actvidades_estadoA = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            estado:'APROBADO',
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }

  const Actvidades_estadoREC = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_estado =  await db.actividad.findAll({
        where: {
            isDelete: false,
            estado:'RECHAZADO',
            idPoa: req.params.idPoa
            },
            })
      res.status(200).json( act_estado );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }
  

  const AllTarea_by_depto_poa1 = async(req,res) => { 
    try{ 
      const allTarea =  await db.tarea.findAll({
      where: {
          isDelete: false,
          //El id de la unidad ejecutora solo crea la relacion
          idUE:req.params.idUE
      },
      include:[{model:db.actividad,include:[{model:db.indicadoresPoa},{model:db.resultado, include:[{model:db.areas},{model:db.objetivos},{model:db.dimension},{model:db.pei}]},{model:db.planificacion},{model:db.ACencargados,include:[{model:db.empleado}]}]},
      {model:db.poa,
        //Este es el where para filtrar por año es de tipo string año
        where:{ anio:{[Op.eq]: req.params.anio },
        isActive:true
      }},{model:db.depto},{model:db.presupuesto, include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}
    ],order: [
      // will return name
      ['createdAt','DESC']]
   
      
    })
    res.status(200).json( allTarea );
  } catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
  }
};

const AllTarea_by_depto_poa_Fuente11 = async(req,res) => { 
  try{ 
    const allTarea =  await db.tarea.findAll({
    where: {
        isDelete: false,
        //El id de la unidad ejecutora solo crea la relacion
        idUE:req.params.idUE
    },
    include:[{model:db.actividad,include:[{model:db.indicadoresPoa},{model:db.resultado, include:[{model:db.areas},{model:db.objetivos},{model:db.dimension},{model:db.pei}]},{model:db.planificacion},{model:db.ACencargados,include:[{model:db.empleado}]}]},
    {model:db.poa,
      //Este es el where para filtrar por año es de tipo string año
      where:{ anio:{[Op.eq]: req.params.anio },
      isActive:true
    }},{model:db.depto},{model:db.presupuesto,
      //este valor 1 es Fuente 11, el 2 es de Fuente 12, el 3 es de Fuente 12B
      where:{ idfuente:{[Op.eq]: 1 } }, include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}
  ],order: [
    // will return name
    ['createdAt','DESC']]
 
    
  })
  res.status(200).json( allTarea );
} catch(error){
    res.status(400).json({
      message:'error al ingresar' + error
    })
}
};

const AllTarea_by_depto_poa_Fuente12 = async(req,res) => { 
  try{ 
    const allTarea =  await db.tarea.findAll({
    where: {
        isDelete: false,
        //El id de la unidad ejecutora solo crea la relacion
        idUE:req.params.idUE
    },
    include:[{model:db.actividad,include:[{model:db.indicadoresPoa},{model:db.resultado, include:[{model:db.areas},{model:db.objetivos},{model:db.dimension},{model:db.pei}]},{model:db.planificacion},{model:db.ACencargados,include:[{model:db.empleado}]}]},
    {model:db.poa,
      //Este es el where para filtrar por año es de tipo string año
      where:{ anio:{[Op.eq]: req.params.anio },
      isActive:true
    }},{model:db.depto},{model:db.presupuesto,
      //este valor 1 es Fuente 11, el 2 es de Fuente 12, el 3 es de Fuente 12B
      where:{ idfuente:{[Op.eq]: 2 } }, include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}
  ],order: [
    // will return name
    ['createdAt','DESC']]
 
    
  })
  res.status(200).json( allTarea );
} catch(error){
    res.status(400).json({
      message:'error al ingresar' + error
    })
}
};

const AllTarea_by_depto_poa_Fuente12B = async(req,res) => { 
  try{ 
    const allTarea =  await db.tarea.findAll({
    where: {
        isDelete: false,
        //El id de la unidad ejecutora solo crea la relacion
        idUE:req.params.idUE
    },
    include:[{model:db.actividad,include:[{model:db.indicadoresPoa},{model:db.resultado, include:[{model:db.areas},{model:db.objetivos},{model:db.dimension},{model:db.pei}]},{model:db.planificacion},{model:db.ACencargados,include:[{model:db.empleado}]}]},
    {model:db.poa,
      //Este es el where para filtrar por año es de tipo string año
      where:{ anio:{[Op.eq]: req.params.anio },
      isActive:true
    }},{model:db.depto},{model:db.presupuesto,
      //este valor 1 es Fuente 11, el 2 es de Fuente 12, el 3 es de Fuente 12B
      where:{ idfuente:{[Op.eq]: 3 } }, include:[{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]}
  ],order: [
    // will return name
    ['createdAt','DESC']]
 
    
  })
  res.status(200).json( allTarea );
} catch(error){
    res.status(400).json({
      message:'error al ingresar' + error
    })
}
};

const get_all_poa_by_idUE = async (req, res) => {
  try {
      const all_ues = await db.poa.findAll(
          {
              where: {
                  isDelete: false,
                  idUE: req.params.idUE
              },
              include: db.ue
          }
      );
      if (!all_ues) {
          return res.status(404).send({ message: 'No hay ningún elemento' });
      }
      return res.status(200).json(all_ues);
  } catch (error) {
      return res.status(500).json({ status: "Server Error: " + error });
  }
}

const get_all_UE = async (req, res) => {
  try {
      const all_ue = await db.ue.findAll({
          where: { isDelete: false }
      });
      if (!all_ue) {
          return res.status(404).send({ message: 'no hay ningun elemento' });
      }
      return res.status(200).json(all_ue);
  } catch (error) {
      return res.status(500).json({ status: "Server Error: " + error });
  }
}
const get_all_data_poa_depto = async (req, res) => {
  try {
    const {id} = req.params;
    if(!id){
      return res.status(400).send('No envió el id del poa de departamento a mostrar')
    }

    const poaDepto = await db.poa_depto.findByPk(id,{
      where:{
        isDelete:false
      },include:[{model:db.depto},{model:db.poa}]
    });

    if(!poaDepto){
      return res.status(404).send('No se encontro ese poa de departamento')
    }

    //obtener todas las actividades
    const actividades = await db.actividad.findAll(
      {
        where:{
          isDelete:false,
          estado:'APROBADO',
          idPoaDepto:id
        }
      }
    );

    const resumen = []; // juntara todas las actividades, con sus indicadores (incluidas sus planificaciones), sus tareas (incluidos sus presupuestos y responsables) y sus responsables
    // for necesario para recorrer cada actividad y agregarle todos sus elementos antes mencionados
    const presupuestoUtilizado = await db.presupuesto.sum('total',{
      include:[
        { model:db.tarea,
          include:[{
            model:db.actividad,
            where:{
              idPoaDepto:poaDepto.id
            }
          }],
          where:{
            estado:'APROBADO'
          }
        }
      ],
      where:{
        isDelete:false
      }
    })
    if(presupuestoUtilizado === null){
      presupuestoUtilizado = 0;
    }
    for (const i of actividades) {
      // primero obtener los indicadores de esa actividad
      let indicadores = [];
      let lista_indicadores = await db.indicadoresPoa.findAll({
        where:{
          isDelete:false,
          idActividad:i.id
        }
      })
      // al tener los indicadores se debe obtener las planificaciones de esos indicadores
      for (const j of lista_indicadores) {
        let planificaciones = await db.planificacion.findAll({
          where:{
            isDelete:false,
            idIndicador:j.id
          },include:[{model:db.mes}]
        })
        indicadores.push({
          indicador:j,
          planificaciones: planificaciones
        })
      }

      // luego se obtiene las tareas de esa actividad
      let tareas = [];
      let lista_tareas = await db.tarea.findAll({
        where:{
          isDelete:false,
          idActividad:i.id
        }
      })
      // al obtener las tareas se necesita que vengan con los recursos necesarios de la misma
      for (const k of lista_tareas) {
        let presupuestos = await db.presupuesto.findAll({
          where:{
            isDelete:false,
            idtarea:k.id
          },include:[{model:db.fuente},{model:db.grupogasto},{model:db.objetogasto},{model:db.unidadmedida},{model:db.mes}]
        })
        

        let encargadosTareas = await db.tarea_encargado.findAll({
          where:{
            isDelete:false,
            idTarea:k.id
          }, include:[{model:db.empleado}]
        })
        tareas.push({
          tarea:k,
          presupuestos: presupuestos,
          encargados:encargadosTareas
        })
      }

      // se obtienen los encargados de esa actividad
      let encargados = await db.ACencargados.findAll({
        where:{
          isDelete:false,
          idActividad:id
        },include:[{model:db.empleado}]
      })

      // al final se agrega lo necesario por cada actividad en el arreglo que sera enviado al cliente
      resumen.push(
        {
          actividad:i,
          indicadores:indicadores,
          tareas:tareas,
          encargados:encargados
        }
      )
    }
    // obtener datos generales de dinero
    const totalAsignado = await db.techo_depto.sum('monto',{
      where:{
        isDelete:false,
        idPoaDepto:id
      }
    })
    const estadoPresupuesto = {
      asignado:totalAsignado,
      utilizado:presupuestoUtilizado,
      disponible:totalAsignado - presupuestoUtilizado
    }
    // obtener datos de resumen segun asignado a cada una de las fuentes
    const fuente11 = await db.techo_depto.sum('techo_depto.monto',{
      where:{
        isDelete:false,
        idPoaDepto:id
      }, include : [{
        model:db.techo_ue,
        where:{
          idFuente:1
        }
      }]
    })
    const fuente12 = await db.techo_depto.sum('techo_depto.monto',{
      where:{
        isDelete:false,
        idPoaDepto:id
      }, include : [{
        model:db.techo_ue,
        where:{
          idFuente:2
        }
      }]
    })
    const fuente12b = await db.techo_depto.sum('techo_depto.monto',{
      where:{
        isDelete:false,
        idPoaDepto:id
      }, include : [{
        model:db.techo_ue,
        where:{
          idFuente:3
        }
      }]
    })
    const fuentes = {
      fuente11,
      fuente12,
      fuente12b
    }
    // obtener datos segun lo obtenido a cada uno de los grupos
    const grupos = {
      labels:[],
      montos:[]
    }
    const _grupos = await db.techo_depto.findAll({
      attributes:['idGrupo'],
      group:['idGrupo'],
      where:{
        isDelete:false,
        idPoaDepto:poaDepto.id
      }
    })
    for (const l of _grupos) {
      let suma = await db.techo_depto.sum('monto',{
        where:{
          idPoaDepto:poaDepto.id,
          idGrupo:l.idGrupo
        }
      })
      grupos.labels.push('Grupo '+l.idGrupo);
      grupos.montos.push(suma);
    }
    

    const respuesta = {
      poaDepto: poaDepto,
      presupuestario: estadoPresupuesto,
      actividades: resumen,
      fuentes,
      grupos
    }
      return res.status(200).json(respuesta);
  } catch (error) {
    console.log(error
      
      )
      return res.status(500).json({ status: "Server Error: " + error });
  }
}
const get_all_data_ue_filtrada = async (req,res)=>{
  try {
    const {
      poa_id,
      trimestre_id,
      fuente_id,
      grupo_id
    } = req.body;
    // obtener el poa, es el unico que el parametro es requerido obligatoriamente
    if(!poa_id){
      return res.status(400).send('Debe enviar un id de poa correcto');
    }

    const poa = await db.poa.findByPk(poa_id,{
      where:{
        isDelete:false
      },include:[{model:db.institucion},{model:db.ue}]
    })

    if(!poa) {
      return res.status(404).send('Poa no encontrado');
    }

    // obtener datos generales de planificacion

    // todos los departamentos que planificaron ese a;o
    const deptos = await db.poa_depto.findAll({
      where:{
        isDelete:false,
        idPoaUE:poa_id
      }, include: [
          {model:db.depto}]
    })

    // todas las actividades separadas por su estado
    const actividades_aprobadas = await db.actividad.count({
      where:{
        isDelete:false,
        estado:'APROBADO',
        idPoa:poa_id
      }
    })
    const actividades_rechazadas = await db.actividad.count({
      where:{
        isDelete:false,
        estado:'RECHAZADO',
        idPoa:poa_id
      }
    })
    const actividades_pendientes = await db.actividad.count({
      where:{
        isDelete:false,
        estado:'REVISION',
        idPoa:poa_id
      }
    })
    const actividades_no_presentadas = await db.actividad.count({
      where:{
        isDelete:false,
        estado:'FORMULACION',
        idPoa:poa_id
      }
    })
    const actividades_en_reformulacion = await db.actividad.count({
      where:{
        isDelete:false,
        estado:'REFORMULACION',
        idPoa:poa_id
      }
    })
    const actividades = {
      actividades_aprobadas,
      actividades_en_reformulacion,
      actividades_no_presentadas,
      actividades_pendientes,
      actividades_rechazadas,
      total : actividades_aprobadas + actividades_en_reformulacion + actividades_no_presentadas + actividades_pendientes + actividades_rechazadas
    }

    // obtener datos presupuestarios segun filtro 
    // calcular presupuesto programado en los 4 escenarios posibles, sin filtro, con filtro grupo, con filtro de fuente y con ambos filtros
    let presupuesto_programado = 0;
    if(grupo_id == 0 && fuente_id == 0){
      presupuesto_programado = await db.techo_ue.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id
        }
      })
    } else if(grupo_id != 0 && fuente_id == 0){
      presupuesto_programado = await db.techo_ue.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id,
          idGrupo:grupo_id
        }
      })
    } else if(grupo_id == 0 && fuente_id != 0){
      presupuesto_programado = await db.techo_ue.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id,
          idFuente:fuente_id
        }
      })
    } else {
      presupuesto_programado = await db.techo_ue.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id,
          idGrupo:grupo_id,
          idFuente:fuente_id
        }
      })
    }
    if(presupuesto_programado === null){presupuesto_programado = 0};
    
    // calcular presupuesto asignado en los 4 escenarios posibles, sin filtro, con filtro grupo, con filtro de fuente y con ambos filtros
    let presupuesto_asignado = 0;
    if(grupo_id == 0 && fuente_id == 0){
      presupuesto_asignado = await db.techo_depto.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id
        }
      })
    } else if(grupo_id != 0 && fuente_id == 0){
      presupuesto_asignado = await db.techo_depto.sum('monto',{
        where:{
          isDelete:false,
          idPoa:poa_id,
          idGrupo:grupo_id
        }
      })
    } else if(grupo_id == 0 && fuente_id != 0){
      presupuesto_asignado = await db.techo_depto.sum('techo_depto.monto',{
        where:{
          isDelete:false,
          idPoa:poa_id
        },include:[{
          model:db.techo_ue,
          where:{
            idFuente:fuente_id
          }
        }]
      })
    } else {
      presupuesto_asignado = await db.techo_depto.sum('techo_depto.monto',{
        where:{
          isDelete:false,
          idPoa:poa_id,
          idGrupo:grupo_id
        },include:[{
          model:db.techo_ue,
          where:{
            idFuente:fuente_id
          }
        }]
      })
    }
    if(presupuesto_asignado === null){presupuesto_asignado = 0};

    // obtener los datos de presupuestos, en base al filtro
    let presupuesto_planificado = 0;
    if( parseInt(trimestre_id) === 0){
      presupuesto_planificado = await db.presupuesto.sum('total',{
        where:{
          isDelete:false
        },include:[
          { model:db.tarea, 
            where:{
                idPoa:poa_id,
                estado:'APROBADO'
              },
            include:
              {model:db.actividad,
               where:{ estado:'APROBADO'}
              }
          }
        ]
      })
      if(presupuesto_planificado === null){
        presupuesto_planificado = 0;
      }
    } else {
      presupuesto_planificado = await db.presupuesto.sum('total',{
        where:{
          isDelete:false
        },include:[
          { model:db.tarea, 
              where:{
                idPoa:poa_id,
                estado:'APROBADO'
              },
              include:
                {model:db.actividad,
                 where:{ estado:'APROBADO'}
                }
          },
          {model:db.mes,
          where:{
            idTrimestre:trimestre_id
          }}
        ]
      })
      if(presupuesto_planificado === null){
        presupuesto_planificado = 0;
      }
    }

    // obtener los datos de presupuestos ejecutados, en base al filtro
    let presupuesto_ejecutado = 0;
    if(parseInt(trimestre_id) === 0){
      presupuesto_ejecutado = await db.seguimiento_tarea.sum('monto_ejecutado',{
        where:{
          isDelete:false
        },include:[
          { model:db.tarea, 
              where:{
                idPoa:poa_id
              }
          }
        ]
      })
      if(presupuesto_ejecutado === null){
        presupuesto_ejecutado = 0;
      }
    } else {
      presupuesto_ejecutado = await db.seguimiento_tarea.sum('monto_ejecutado',{
        where:{
          isDelete:false
        },include:[
          { model:db.tarea, 
              where:{
                idPoa:poa_id
              }
          },
          {model:db.presupuesto,
            include:[{
              model:db.mes,
              where:{
                idTrimestre:trimestre_id
              }
            }]
          }
        ]
      })
      if(presupuesto_ejecutado === null){
        presupuesto_ejecutado = 0;
      }
    }

    const presupuestos = {
      presupuesto_programado,
      presupuesto_asignado,
      presupuesto_planificado,
      presupuesto_ejecutado
    }

    // datos institucionales, dimensiones y resultados institucionales que se estan cumpliendo

    const cant_dimensiones = await db.actividad.findAll({
      group: ['resultado.idDimension'],
      where:{
        isDelete:false,
        estado : 'APROBADO',
        idPoa:poa_id
      }, include:[{
        model:db.resultado,
        attributes: ['idDimension']
      }]
       
    })
    const cant_resultados = await db.actividad.findAll({
      group: ['idResultado'],
      where:{
        isDelete:false,
        estado : 'APROBADO',
        idPoa:poa_id
      }
    })
    const institucional = {
      cant_resultados : cant_resultados.length,
      cant_dimensiones : cant_dimensiones.length
    }

    // datos presupuestarios en base al grupo de gasto


    // datos de las planificaciones 
    const planificaciones_t1 = await db.planificacion.count({
      where:{
        isDelete:false
      }, include:[{
        model:db.actividad,
        where:{
          idPoa:poa_id
        }
      },
    {
      model:db.mes,
      where:{
        idTrimestre:1
      }
    }]
    })

    const planificaciones_t2 = await db.planificacion.count({
      where:{
        isDelete:false
      }, include:[{
        model:db.actividad,
        where:{
          idPoa:poa_id
        }
      },
    {
      model:db.mes,
      where:{
        idTrimestre:2
      }
    }]
    })

    const planificaciones_t3 = await db.planificacion.count({
      where:{
        isDelete:false
      }, include:[{
        model:db.actividad,
        where:{
          idPoa:poa_id
        }
      },
    {
      model:db.mes,
      where:{
        idTrimestre:3
      }
    }]
    })
    const planificaciones_t4 = await db.planificacion.count({
      where:{
        isDelete:false
      }, include:[{
        model:db.actividad,
        where:{
          idPoa:poa_id
        }
      },
    {
      model:db.mes,
      where:{
        idTrimestre:4
      }
    }]
    })

        // datos de las planificaciones  ejecutadas
        const planificaciones_ejecutadas_t1 = await db.seguimiento_planificacion.count({
          where:{
            isDelete:false
          }, include:[
            {
              model:db.planificacion,
              include:[
                {
                  model:db.actividad,
                  where:{
                    idPoa:poa_id
                  }
                },
                {
                  model:db.mes,
                  where:{
                    idTrimestre:1
                  }
                }
              ]
            }
          ]
        })
    
        const planificaciones_ejecutadas_t2 = await db.seguimiento_planificacion.count({
          where:{
            isDelete:false
          }, include:[
            {
              model:db.planificacion,
              include:[
                {
                  model:db.actividad,
                  where:{
                    idPoa:poa_id
                  }
                },
                {
                  model:db.mes,
                  where:{
                    idTrimestre:2
                  }
                }
              ]
            }
          ]
        })
    
        const planificaciones_ejecutadas_t3 = await db.seguimiento_planificacion.count({
          where:{
            isDelete:false
          }, include:[
            {
              model:db.planificacion,
              include:[
                {
                  model:db.actividad,
                  where:{
                    idPoa:poa_id
                  }
                },
                {
                  model:db.mes,
                  where:{
                    idTrimestre:3
                  }
                }
              ]
            }
          ]
        })
        const planificaciones_ejecutadas_t4 = await db.seguimiento_planificacion.count({
          where:{
            isDelete:false
          }, include:[
            {
              model:db.planificacion,
              include:[
                {
                  model:db.actividad,
                  where:{
                    idPoa:poa_id
                  }
                },
                {
                  model:db.mes,
                  where:{
                    idTrimestre:4
                  }
                }
              ]
            }
          ]
        })
    // consolidados de planificaciones
    const planificaciones = {
      planificaciones_t1,
      planificaciones_t2,
      planificaciones_t3,
      planificaciones_t4,
      planificaciones_ejecutadas_t1,
      planificaciones_ejecutadas_t2,
      planificaciones_ejecutadas_t3,
      planificaciones_ejecutadas_t4,
      total_planificado: planificaciones_t1 + planificaciones_t2 + planificaciones_t3 + planificaciones_t4,
      total_ejecutado: planificaciones_ejecutadas_t1 + planificaciones_ejecutadas_t2 + planificaciones_ejecutadas_t3 + planificaciones_ejecutadas_t4
    }

    // presupuestos por grupo del gasto
    //const grupos = await 



    const respuesta = {
      poa,
      poa_deptos : deptos,
      actividades,
      presupuestos,
      institucional,
      planificaciones

    }
    return res.status(200).send(respuesta);

  } catch (error) {
    console.log(error)
    return res.status(500).json({ status: "Server Error: " + error });
  }
}

module.exports = {
    get_all_departamento,
    get_all_poa_by_idDepto,
    AllTarea_by_depto_poa,
    suma_Fuente11,
    suma_Fuente12,
    suma_Fuente12B,
    Tareas_sin_presupuesto,
    Tareas_con_presupuesto,
    Actvidades_estadoF,
    Actvidades_estadoRF,
    Actvidades_estadoR,
    Actvidades_estadoA,
    Actvidades_estadoREC,
    Actvidades,
    AllTarea_by_depto_poa1,
    AllTarea_by_depto_poa_Fuente11,
    AllTarea_by_depto_poa_Fuente12,
    AllTarea_by_depto_poa_Fuente12B,
    get_all_poa_by_idUE,
    get_all_UE,

    get_all_data_poa_depto,
    get_all_data_ue_filtrada
}