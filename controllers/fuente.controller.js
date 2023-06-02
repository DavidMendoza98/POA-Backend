const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
// const objetivo = db.objetivos;
const bcrypt = require("bcryptjs");
const { dimension } = require("../models/");
// const { dimension } = require("../models/");

/// Listo
const AllFuente = async(req,res) => { 
    try{ 
      const allFuente =  await db.fuente.findAll({
      where: {
          isDelete: false,
      }
    })
    res.status(200).json( allFuente );
  } catch(error){
      res.status(400).json({"message":'No se ha podido obtener datos del servidor',"error":error})
  }
  };
// Segundo listo
  const AllFuente_by_id = async(req,res) => { 
    try{ 
      const allfuente =  await db.fuente.findOne({
      where: {
          isDelete: false,
          id: req.params.id
      }
    })
    res.status(200).json( allfuente );
  } catch(error){
      res.status(400).json({
        message:'error al mostrar' + error
      })
  }
  };

// Tercero Listo
  const newFuente = async (req,res) =>{
    try{
        //db.sequelize.authenticate();
        db.fuente.create({
            nombre: req.body.nombre,
            identificador: req.body.identificador
        });
        return res.status(200).json({status:"ok"});
    } catch(error){
        console.log("error: " + error);
        return res.status(400).json({status:"error", error : error});
    }
} 

const eliminarFuente = async (req, res) => {
  try {
    const fuenteUpdate = await db.fuente.update({
        isDelete: true
  },{
    where: {
      id: req.params.id
    }
  });
  if (fuenteUpdate){
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

const updateFuente = async(req, res) =>{
  try {
    if(!req.body.nombre){
        return res.status(400).json({message:'Debe enviar todos los datos'});
    }
    const updateFuente = await db.fuente.update({
        nombre: req.body.nombre,
        identificador: req.body.descripcion,
    }, {
        where: {
            id: req.body.id
        }
    });
    if (updateFuente) {
        res.status(200).send({
            message: "Objetivo actualizado con éxito",
            resultado : updateFuente
        });
    }
} catch (error) {
    console.log(error);
    return res.status(500).json({status:"Server Error: " + error});
}
};

module.exports = {
  AllFuente,
  AllFuente_by_id,
  updateFuente,
  eliminarFuente,
  newFuente
}