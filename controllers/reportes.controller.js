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
    let presupuestoUsado  = 0;
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

        let suma_presupuesto_1_tarea = await db.presupuesto.sum('total',{
          where:{
            isDelete:false,
            idtarea:k.id
          }
        })
        if(suma_presupuesto_1_tarea === null){
          suma_presupuesto_1_tarea = 0;
        }
        presupuestoUsado = presupuestoUsado + parseFloat(suma_presupuesto_1_tarea);

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
        idPoaDepto:id
      }
    })
    const estadoPresupuesto = {
      asignado:totalAsignado,
      utilizado:presupuestoUsado,
      disponible:totalAsignado - presupuestoUsado
    }

    const respuesta = {
      poaDepto: poaDepto,
      presupuestario: estadoPresupuesto,
      actividades: resumen
    }
      return res.status(200).json(respuesta);
  } catch (error) {
    console.log(error
      
      )
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

    get_all_data_poa_depto
}