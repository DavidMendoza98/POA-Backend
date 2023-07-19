const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
// const objetivo = db.objetivos;
const bcrypt = require("bcryptjs");
const { dimension } = require("../models/");
// const { dimension } = require("../models/");

/// Listo
const AllObjeto = async(req,res) => { 
    try{ 
      const allObjeto =  await db.objetogasto.findAll({
      where: {
          isDelete: false,
      },include:[{
        model: db.grupogasto,
      }],order: [
        // will return `name`
        ['identificador']]
    })
    res.status(200).json( allObjeto );
  } catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
  }
  };
// Segundo listo
  const AllObjeto_by_id = async(req,res) => { 
    try{ 
      const allObjeto =  await db.objetogasto.findOne({
      where: {
          isDelete: false,
          id: req.params.id
      },include:[{
        model: db.grupogasto,
      }]
    })
    res.status(200).json( allObjeto );
  } catch(error){
      res.status(400).json({
        message:'error al mostrar' + error
      })
  }
  };

// Tercero Listo
  const newObjetogasto = async (req,res) =>{
    try{
        //db.sequelize.authenticate();
        const {nombre,descripcion,identificador,idGrupo} = req.body;
        if(!nombre){
          return res.status(400).send('No envió el nombre del objeto')
        }
        if(!descripcion){
          return res.status(400).send('No envió la descripcion del objeto')
        }
        if(!identificador){
          return res.status(400).send('No envió el identificador del objeto')
        }
        if(!idGrupo){
          return res.status(400).send('No envió el id de grupo del objeto')
        }
        
        db.objetogasto.create({
            nombre: nombre,
            descripcion: descripcion,
            identificador: identificador,
            idgrupo: idGrupo
        });
        return res.status(200).json({status:"ok"});
    } catch(error){
        console.log("error: " + error);
        return res.status(500).json({status:"error", error : error});
    }
} 

const eliminarObjeto = async (req, res) => {
  try {
    if(!req.params.id){
      return res.status(400).send('No envió el id del objeto')
    }
    const objetoUpdate = await db.objetogasto.update({
        isDelete: true
  },{
    where: {
      id: req.params.id
    }
  });
  if (objetoUpdate){
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

const updateObjeto = async(req, res) =>{
  try {
    const {id,nombre,descripcion,identificador,idGrupo} = req.body;
    if(!id){
      return res.status(400).send('No envió el id del objeto')
    }
        if(!nombre){
          return res.status(400).send('No envió el nombre del objeto')
        }
        if(!descripcion){
          return res.status(400).send('No envió la descripcion del objeto')
        }
        if(!identificador){
          return res.status(400).send('No envió el identificador del objeto')
        }
        if(!idGrupo){
          return res.status(400).send('No envió el id de grupo del objeto')
        }
    const updateObjeto = await db.objetogasto.update({
        nombre: nombre,
        descripcion:descripcion,
        identificador: identificador,
        idgrupo:idGrupo
    }, {
        where: {
            id: id
        }
    });
    if (updateObjeto) {
        res.status(200).send({
            message: "Objetivo actualizado con éxito",
            resultado : updateObjeto
        });
    }
} catch (error) {
    console.log(error);
    return res.status(500).json({status:"Server Error: " + error});
}
};

module.exports = {
  AllObjeto,
  AllObjeto_by_id,
  updateObjeto,
  eliminarObjeto,
  newObjetogasto
}