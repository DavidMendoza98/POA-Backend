const db = require("../models");
//////////////////////////////////////////////////////////////
// Controlador para crear planificacion
//////////////////////////////////////////////////////////7
const new_Planificacion = async (req, res) => {
  try {
    await db.planificacion.create({
      idMes: req.body.idMes,
      idIndicador: req.body.idIndicador.toString(),
      cantidad: req.body.cantidad,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
      idActividad: req.body.idActividad
    });

    return res.status(200).json({ status: "Ok" });
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

/////////////////////////////////////////////////////////////////////////
// Controlador para obtener una unica planificacion
/////////////////////////////////////////////////////////////////////////
const get_Planificacion = async (req, res) => {
  try {
    // Busca y retorna una planificacion por el id
    const Planificacion = await db.planificacion.findOne({
      where: {
        id: req.params.id,
        isDelete: false,
      },
    });

    // Valida si la planificacion no existe
    if (!Planificacion) {
      return res.status(404).json({ message: "La planificacion no existe" });
    }
    return res.status(200).json({ status: "Ok", Planificacion });
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

/////////////////////////////////////////////////////////////////
//Funcion para obtener todas las planificaciones
////////////////////////////////////////////////////////////////
const get_all_Planificacion = async (req, res) => {
  try {
    // Busca todas las planificaciones que esten activas
    const all_Planificacion_sin_filtrar = await db.planificacion.findAll({
      where: {
        isDelete: false,
        idActividad: req.params.idActividad
      }
      ,include: [{
        model: db.indicadoresPoa
      }]
    });

    // Valida el caso de que no existan registros de planificacion
    if (!all_Planificacion_sin_filtrar) {
      return res
        .status(404)
        .send({ message: "No hay planificaciones registradas" });
    }
    // obtiene todas las revisiones de esas planificaciones y construye un nuevo arreglo para enviar la planificacion, las revisiones y un booleano para saber si hay revisiones
    const all_Planificacion = []
    for (const i of all_Planificacion_sin_filtrar) {
      let revisiones = await db.revision.findAll(
        {
          where:{
            idForaneo: i.id,
            tipo:"PLANIFICACION"
          }
        }
      ) 
      all_Planificacion.push({
        planificacion:i,
        isRevision: revisiones.length >0 ? true : false,
        revisiones: revisiones
      })
  
    }

    // dividir el arreglo segun meses
    let enero = all_Planificacion.filter(item => item.planificacion.idMes === 1);
    let febrero = all_Planificacion.filter(item => item.planificacion.idMes === 2);
    let marzo = all_Planificacion.filter(item => item.planificacion.idMes === 3);
    let abril = all_Planificacion.filter(item => item.planificacion.idMes === 4);
    let mayo = all_Planificacion.filter(item => item.planificacion.idMes === 5);
    let junio = all_Planificacion.filter(item => item.planificacion.idMes === 6);
    let julio = all_Planificacion.filter(item => item.planificacion.idMes === 7);
    let agosto = all_Planificacion.filter(item => item.planificacion.idMes === 8);
    let septiembre = all_Planificacion.filter(item => item.planificacion.idMes === 9);
    let octubre = all_Planificacion.filter(item => item.planificacion.idMes === 10);
    let noviembre = all_Planificacion.filter(item => item.planificacion.idMes === 11);
    let diciembre = all_Planificacion.filter(item => item.planificacion.idMes === 12);

    let has_primero = all_Planificacion.some(item => item.planificacion.idMes>=1 && item.planificacion.idMes <= 3 );
    let has_segundo = all_Planificacion.some(item => item.planificacion.idMes>=4 && item.planificacion.idMes <= 6 );
    let has_tercero = all_Planificacion.some(item => item.planificacion.idMes>=7 && item.planificacion.idMes <= 9 );
    let has_cuarto = all_Planificacion.some(item => item.planificacion.idMes>=10 && item.planificacion.idMes <= 12 );

    // dividir los meses en trimestres y ultimo booleanos para saber si hay planificaciones en cada trimestre
    const planificacion = {
      'primer':{
        'enero':enero,
        'febrero':febrero,
        'marzo':marzo
      },
      'segundo':{
        'abril':abril,
        'mayo':mayo,
        'junio':junio
      },
      'tercero':{
        'julio':julio,
        'agosto':agosto,
        'septiembre':septiembre
      },
      'cuarto':{
        'octubre':octubre,
        'noviembre':noviembre,
        'diciembre':diciembre
      },
      'validaciones':{
        'primero':has_primero,
        'segundo':has_segundo,
        'tercero':has_tercero,
        'cuarto':has_cuarto,
      },
      'sinfiltro':{
        all_Planificacion
      }
    }
    
    return res.status(200).json(planificacion);
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

/////////////////////////////////////////////////////////////
// Controlador para actualizar una planificacion
////////////////////////////////////////////////////////////
const update_Planificacion = async (req, res) => {
  try {

    if(!req.body.trimestre){
        return res.status(400).json({message:'Debe enviar todos los datos'});
    }

    const temporally = await db.planificacion.update({
        idMes: req.body.idMes,
        idIndicador: req.body.idIndicador,
        cantidad: req.body.cantidad,
        fechaInicio : req.body.fechaInicio,
        fechaFin:req.body.fechaFin
    }, {
        where: {
            id: req.body.id
        }
    });

    if (temporally) {
        res.status(200).send({
            message: "Planificacion actualizada con exito",
            dimension : temporally
        });
    }
} catch (error) {
    console.log(error);
    return res.status(500).json({status:"Server Error: " + error});
}
};

/////////////////////////////////////////////////////////////////
// Controlador para deshabilitar una planificacion
/////////////////////////////////////////////////////////////////
const disable_Planificacion = async (req, res) => {
  try {
    const temporally = await db.planificacion.update(
      {
        isDelete: true,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    if (!temporally) {
      res.status(404).send({ message: "la planificacion a borrar no existe" });
    } else {
      res
        .status(200)
        .send({ message: "la planificacion se ha borrado con exito" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

const get_all_planificaciones_by_idActividad = async (req,res) =>{
  try{
      const all_planificacion = await db.planificacion.findAll(
         { where:{isDelete:false,
                  idActividad : req.params.idActividad},
          include:db.actividad}
      );
      if(!all_planificacion){
          return res.status(404).send({message:'no hay ningun elemento'});
      }
      return res.status(200).json(all_planificacion);
  }catch(error){
      return res.status(500).json({status:"Server Error: " + error});
  }
}


module.exports = {
  new_Planificacion,
  get_all_Planificacion,
  disable_Planificacion,
  update_Planificacion,
  get_Planificacion,
  get_all_planificaciones_by_idActividad
};
