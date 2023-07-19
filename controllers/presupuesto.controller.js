const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
const { tarea, grupogasto } = require("../models/");



const allPresupuesto = async(req,res) => { 
  try{ 
    const allPresupuesto =  await db.presupuesto.findAll({
    where: {
        isDelete: false,
    },
    include:[{
      model: db.tarea,
    },{
        model:db.objetogasto ,
      },{
        model:db.grupogasto,
      },{
        model:db.unidadmedida,
      },{
        model:db.fuente,
      }]
  })
    return res.status(200).json( allPresupuesto );
} catch(error){
    res.status(400).json({
      message:'error en la petición' + error
    })
}
}

/// por nombre esta ahorita
const presupuesto_by_idTarea = async(req,res) => { 
  try{ 
    const allPresupuesto =  await db.presupuesto.findAll({
    where: {
        isDelete: false,
        idtarea: req.params.idtarea
    },
    include:[{
      model: db.tarea,
    },{
        model:db.objetogasto ,
      },{
        model:db.grupogasto,
      },{
        model:db.unidadmedida,
      },{
        model:db.fuente,
      }]
  })
    return res.status(200).json( allPresupuesto );
} catch(error){
    res.status(400).json({
      message:'error en la petición' + error
    })
}
}

  // const probando_like = async(req,res) => { 
  //   try{ 
  //     const onepresupuesto =  await db.presupuesto.findOne({
       
  //     include:[{
  //       model: db.tarea,
  //       isDelete: false,
  //           name: {
  //               substring: req.body.nombre
  //             }
  //   },{
  //       model: db.objetogasto,
  //       // where: {
  //       //     isDelete: false,
  //       //     name: {
  //       //         like: '%'+req.body.tarea.nombre+'%'
  //       //       }
  //       // },
  //       }]
  //   })
  //   res.status(200).json( onepresupuesto );
  // } catch(error){
  //     res.status(400).json({
  //       message:'error al mostrar' + error
  //     })
  // }
  // };

  const newPresupuesto = async (req, res) => {
    try{
      const i = JSON.parse(req.body.presupuesto);
      const id = req.body.id;
      if(!i){
        return res
      }

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
        idtarea: id,
        idfuente: i.techo.techo.techo_ue.fuente.id,
        idMes: parseInt(i.mes),
        idunidad: parseInt(i.unidad),
        idHistorico:i.historico.id
      })

      await db.tarea.update({
        isPresupuesto:true
      }, {
        where:{
          id:id
      }
    })
      res.status(200).json({
        message: 'Recurso creado con éxito'
      })
  
    } catch (error) {
      res.status(500).json({
        message: 'error al ingresar' + error
      })
    }
  };

  const deletePresupuesto = async(req, res) =>{
    try {
      if(!req.params.id){
        return res.status(400).send('No envio el id')
      }
      const presupuestodelete = await db.presupuesto.update({
          isDelete: true
    },{
      where: {
        idP: req.params.id
      }
    });
    if (presupuestodelete){
        res.status(200).send({
          message: "presupuesto eliminado"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error al eliminar el usuario " + error.message
    });
  }
  };   
  
  const updatePresupuesto= async(req, res) =>{
    try {

      const tarea = await db.tarea.findByPk(req.body.idtarea);
      const objeto= await db.objetogasto.findByPk(req.body.idobjeto)
    if (!tarea){ 
      res.status(404).send({message:'no se encontro la tarea'});
    }
      const updatePresupuesto = await db.presupuesto.update({
        cantidad: req.body.cantidad,
        costounitario: req.body.costounitario,
        total:req.body.total,
        idobjeto: objeto.id,
        idgrupo: objeto.idgrupo,
        idtarea: tarea.id,
        idfuente: req.body.idfuente,
        idunidad: req.body.idunidad
      }, {
          where: {
              id: req.body.id
          }
      });
      if (updatePresupuesto) {
          res.status(200).send({
              message: "Resultado actualizado con éxito",
              resultado : updatePresupuesto
          });
      }
  } catch (error) {
      console.log(error);
      return res.status(500).json({status:"Server Error: " + error});
  }
  };
  const update_parcial_Presupuesto= async(req, res) =>{
    try {
      const {id,detalle_tecnico,cantidad,costo,mes} = req.body;
      if (!id){ 
        res.status(400).send({message:'no envió el id'});
      }
    if (!detalle_tecnico){ 
      res.status(400).send({message:'no envió el detalle técnico'});
    }
    if (!cantidad){ 
      res.status(400).send({message:'no envió la cantidad'});
    }
    if (!costo){ 
      res.status(400).send({message:'no envió el costo unitario'});
    }
    if (!mes){ 
      res.status(400).send({message:'no envió el id del mes'});
    }
      const updatePresupuesto = await db.presupuesto.update({
        cantidad: cantidad,
        costounitario: costo,
        total:parseFloat(cantidad)* parseFloat(costo),
        idMes:mes,
        detalle_tecnico:detalle_tecnico
      }, {
          where: {
              idP: id
          }
      });
      if (updatePresupuesto) {
          res.status(200).send({
              message: "Resultado actualizado con éxito",
              resultado : updatePresupuesto
          });
      }
  } catch (error) {
      console.log(error);
      return res.status(500).json({status:"Server Error: " + error});
  }
  };

  module.exports = {
   presupuesto_by_idTarea,
   allPresupuesto,
   newPresupuesto,
   updatePresupuesto,
   deletePresupuesto,
   update_parcial_Presupuesto
  }