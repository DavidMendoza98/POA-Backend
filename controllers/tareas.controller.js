const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model, and, or } = require("sequelize");
// const objetivo = db.objetivos;
const bcrypt = require("bcryptjs");
const { dimension, presupuesto } = require("../models/");
const { disable_dimension } = require("./dimension.controller");
const { UpdateDateColumn } = require("typeorm");
// const { dimension } = require("../models/");
/// Listo
const AllTareas = async (req, res) => {
  try {
    const AllTareas = await db.tarea.findAll({
      where: {
        isDelete: false,
      }, include: [{
        model: db.actividad,
      }]
    })
    res.status(200).json(AllTareas);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
};
// Segundo listo
const AllTareas_by_id = async (req, res) => {
  try {
    const allTareas = await db.tarea.findOne({
      where: {
        isDelete: false,
        id: req.params.id
      }, include: [{ model: db.actividad }, { model: db.presupuesto, include: [{ model: db.grupogasto }, { model: db.mes },{ model: db.objetogasto }, { model: db.unidadmedida }, { model: db.fuente }] }
      ]
    })
    res.status(200).json(allTareas);
  } catch (error) {
    res.status(400).json({
      message: 'error al mostrar' + error
    })
  }
};
// Tercero Listo
const newTarea = async (req, res) => {
  try {

    const actividad = await db.actividad.findByPk(req.body.idActividad);
    if (!actividad) {
      res.status(404).send({ message: 'no se encontro la actividad' });
    }
    let cantidadTareas = await db.tarea.count({
      where: {
        idActividad: actividad.id
      }
    })
    cantidadTareas = cantidadTareas + 1;
    const correlativo = actividad.correlativo + '-' +cantidadTareas.toString();
    const tareaCreada = await db.tarea.create({
      nombre: req.body.nombre,
      descripcion: ' ',
      correlativo:correlativo,
      estado:'REVISION',
      isPresupuesto: req.body.isPresupuesto,
      idActividad: actividad.id,
      idPoa: actividad.idPoa,
      idDepto: actividad.idDepto,
      idUE: actividad.idUE
    });
    if (tareaCreada.isPresupuesto == true) {
      const presupuestos = JSON.parse(req.body.presupuestos);
      for (const i of presupuestos) {
        const objeto = await db.objetogasto.findByPk(i.historico.objetogasto.id)
        const total = parseFloat(i.cantidad) * parseFloat(i.costo);
      await db.presupuesto.create({
        recurso:i.historico.nombre,
        detalle_tecnico:i.detalle_tecnico,
        cantidad: i.cantidad,
        costounitario: i.costo,
        total: total,
        idobjeto: objeto.id,
        idgrupo: objeto.idgrupo,
        idtarea: tareaCreada.id,
        idfuente: i.techo.techo.techo_ue.fuente.id,
        idMes: parseInt(i.mes),
        idunidad: parseInt(i.unidad),
        idHistorico:i.historico.id
      })
      }
      
    }

    const encargados = JSON.parse(req.body.encargados);
    if(encargados.length > 0){
      for (const i of encargados) {
        await db.tarea_encargado.create(
          {
            idEmpleado: i.id,
            idActividad: actividad.id,
            idTarea: tareaCreada.id
          }
        )
      }
    }

    return res.status(200).send(tareaCreada);
  } catch (error) {
    console.log("error: " + error);
    return res.status(500).json({ status: "error", error: error });
  }
}
const eliminarTarea = async (req, res) => {
  try {
    const updateTarea = await db.tarea.update({
      isDelete: true
    }, {
      where: {
        id: req.params.id
      }
    });
    if (updateTarea) {
      res.status(200).send({
        message: "Usuario baja en el backend"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Error al elimiar el usuario " + error.message
    });
  }
}

const setAprobadaTarea = async (req, res) => {
  try {
    const updateTarea = await db.tarea.update({
      estado: 'APROBADO'
    }, {
      where: {
        id: req.params.id
      }
    });
    if (updateTarea) {
      res.status(200).send({
        message: "Tarea Aprobada"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error al aprobar la tarea " + error.message
    });
  }
}
const setRechazadaTarea = async (req, res) => {
  try {
    const updateTarea = await db.tarea.update({
      estado: 'RECHAZADO'
    }, {
      where: {
        id: req.params.id
      }
    });
    if (updateTarea) {
      res.status(200).send({
        message: "Tarea Aprobada"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error al aprobar la tarea " + error.message
    });
  }
}
const updateTarea = async (req, res) => {
  try {
    const tareas = await db.tarea.findByPk(req.body.id);
    if (!tareas) {
      res.status(404).send({ message: 'no se encontro la tarea' });
    }

    const actividad = await db.actividad.findByPk(req.body.idActividad);
    if (!actividad) {
      res.status(404).send({ message: 'no se encontro la actividad' });
    }

    const updatetarea = await db.tarea.update({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion
    }, {
      where: {
        id: tareas.id
      }
    });

    
    if (tareas.isPresupuesto) {
      await db.presupuesto.update({
        cantidad: req.body.cantidad,
        costounitario: req.body.costounitario,
        total: req.body.total,
        idunidad: req.body.idunidad
      }, {
        where: {
          idtarea: tareas.id
        }
      })
    }
    if (updatetarea) {
      res.status(200).send({
        message: "Tarea actualizada con éxito",
        updatetarea

      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
  }

};
const updateNombreTarea = async (req, res) => {
  try {
    const {id,nombre} = req.body;
    if(!id){
      return res.status(400).send("No envió el id de la tarea a actualizar")
    }
    if(!nombre){
      return res.status(400).send("No envió el nombre de la tarea a actualizar")
    }
    const updatetarea = await db.tarea.update({
      nombre: nombre
    }, {
      where: {
        id: id
      }
    });
    if (updatetarea) {
      res.status(200).send({
        message: "Tarea actualizada con éxito",
        updatetarea

      });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
  }

};
const probando_like = async (req, res) => {
  try {
    const tarea = await db.tareas_historico.findOne({
      where: {
        nombre: {
          [Op.substring]: req.params.nombre,
        }
      }
      //   include:[{model:db.presupuesto, include:[{model:db.grupogasto},{model: db.objetogasto},{model: db.unidadmedida}]},]
    });
    //   const onepresupuesto =  await db.presupuesto.findOne({
    //   include:[{
    //     model: db.tarea,
    //     isDelete: false,
    //         name: {
    //             substring: req.body.nombre
    //           }
    // },{
    //     model: db.objetogasto,
    //     // where: {
    //     //     isDelete: false,
    //     //     name: {
    //     //         like: '%'+req.body.tarea.nombre+'%'
    //     //       }
    //     // },
    //     }]
    // })

    res.status(200).json({ status: "Ok", tarea });
  } catch (error) {
    res.status(400).json({
      message: 'error al mostrar' + error
    })
  }
};
const AllTarea_by_idActividad = async (req, res) => {
  try {
    const allTarea = await db.tarea.findAll({
      where: {
        isDelete: false,
        idActividad: req.params.idActividad
      },
      include: [{ model: db.actividad }] 
      , order: [
        // will return `name`
        ['createdAt', 'DESC']]


    })
    result = [];

    for (const i of allTarea) {
      let revisiones = await db.revision.findAll(
        {
          where: {
            idForaneo: i.id,
            tipo: "TAREA"
          }
        }
      )
      let presupuestos = await db.presupuesto.findAll(
        {
          where: {
            isDelete:false,
            idtarea: i.id,
          },
          include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, { model: db.fuente },{model:db.tareas_historico}]
        }
      )
      result.push({
        tarea: i,
        isRevision: revisiones.length > 0 ? true : false,
        revisiones: revisiones,
        presupuestos:presupuestos
      })

    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
};

const suma11 = async (req, res) => {
  try {
    // const actividad = await db.actividad.findByPk(req.body.idActividad);
    const suma11 = await db.poa.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: db.actividad, include: [
          {
            model: db.tarea,
            where: {
              isPresupuesto: true
            },
            include: [{
              model: db.presupuesto, include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, {
                model: db.fuente,
              }
              ]
            }]
          }
        ]
      }]
    })
    res.status(200).json(suma11);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
}

const sumaPresupuestos_Fuente11 = async (req, res) => {
  try {
    const actividad = await db.actividad.findByPk(req.body.idActividad);
    const sumaFuente11 = await db.tarea.findAll({

      where: {
        isDelete: false,
        isPresupuesto: true,
        idPoa: req.params.idPoa
      },
      include: [{ model: db.actividad, include: [{ model: db.poa }] }, {
        model: db.presupuesto, where: {
          idfuente: { [Op.eq]: 1 }
        },
        include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, {
          model: db.fuente,
        }
        ]
      }
      ]
    })
    res.status(200).json(sumaFuente11);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
}


const sumaPresupuestos_Fuente12 = async (req, res) => {
  try {
    const actividad = await db.actividad.findByPk(req.body.idActividad);
    const sumaFuente11 = await db.tarea.findAll({

      where: {
        isDelete: false,
        isPresupuesto: true,
        idPoa: req.params.idPoa
      },
      include: [{ model: db.actividad, include: [{ model: db.poa }] }, {
        model: db.presupuesto, where: {
          idfuente: { [Op.eq]: 2 }
        },
        include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, {
          model: db.fuente,
        }
        ]
      }
      ]
    })
    res.status(200).json(sumaFuente11);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
}

const sumaPresupuestos_Fuente12B = async (req, res) => {
  try {
    const actividad = await db.actividad.findByPk(req.body.idActividad);
    const sumaFuente11 = await db.tarea.findAll({

      where: {
        isDelete: false,
        isPresupuesto: true,
        idPoa: req.params.idPoa
      },
      include: [{ model: db.actividad, include: [{ model: db.poa }] }, {
        model: db.presupuesto, where: {
          idfuente: { [Op.eq]: 3 }
        },
        include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, {
          model: db.fuente,
        }
        ]
      }
      ]
    })
    res.status(200).json(sumaFuente11);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
}



// const sumaPresupuestos = async(req,res) => {
//   try{
//     const sumaFuente11 =  await db.poa.findAll({

//       where: {
//           isDelete: false,
//           //id: req.params.id,
//           // '$actividad.tarea.presupuesto.idfuente$': { [Op.eq]: 1 }
//       },
//       include:{model:db.actividad,include:{model:db.tarea,
//         include:{model:db.presupuesto, 
//           include:[{model:db.grupogasto},{model: db.objetogasto},
//             {model:db.unidadmedida},{model:db.fuente}],where:{
//                idfuente:{[Op.eq]: 1 },
//                idP: req.params.id
//                //attributes: [[sequelize.fn('sum', sequelize.col('total')), 'total']]
//               //  { name: { [Op.ne]: 'empty trash' } }
//             } 

//           }}}



//   })
//     res.status(200).json( sumaFuente11 );
//   }catch(error){
//     res.status(400).json({
//       message:'error al ingresar' + error
//     })
//   }
// }

const AllTarea_by_idActividad_presupuesto = async (req, res) => {
  try {
    const actividad = await db.actividad.findByPk(req.body.idActividad);
    const allTarea = await db.tarea.findAll({
      where: {
        isDelete: false,
        idActividad: req.params.idActividad,
        isPresupuesto: true
      },
      include: [{ model: db.actividad, include: [{ model: db.poa }] }, { model: db.presupuesto, include: [{ model: db.grupogasto }, { model: db.objetogasto }, { model: db.unidadmedida }, { model: db.fuente }] }
      ]
    })
    res.status(200).json(allTarea);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
};



module.exports = {
  AllTareas,
  AllTareas_by_id,
  updateTarea,
  updateNombreTarea,
  eliminarTarea,
  newTarea,
  setAprobadaTarea,
  setRechazadaTarea,
  probando_like,
  AllTarea_by_idActividad,
  AllTarea_by_idActividad_presupuesto,
  sumaPresupuestos_Fuente11,
  sumaPresupuestos_Fuente12,
  sumaPresupuestos_Fuente12B,
  suma11
}