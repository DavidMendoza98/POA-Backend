const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model, and, or } = require("sequelize");
// const objetivo = db.objetivos;
const bcrypt = require("bcryptjs");
const { dimension } = require("../models/");
const { disable_dimension } = require("./dimension.controller");
const { UpdateDateColumn } = require("typeorm");
// const { dimension } = require("../models/");
/// Listo
const AllTareasH = async(req,res) => { 
    try{ 
      const AllTareasH =  await db.tareas_historico.findAll({
      where: {
          isDelete: false,
          
      },order: [
        // will return `name`
        ['nombre']]
    })
    res.status(200).json( AllTareasH );
  } catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
  }
  };

const create = async(req,res) =>{
  try {
    const {nombre,idobjeto,idunidad} = req.body;
    if(!nombre){
      return res.status(400).send('No envió el nombre');
    }
    if(!idobjeto){
      return res.status(400).send('No envió el id del objeto');
    }
    if(!idunidad){
      return res.status(400).send('No envió el id del grupo');
    }

    const objeto = await db.objetogasto.findOne({
      where:{
        identificador:idobjeto
      }, 
      include : db.grupogasto
    });
    if(!objeto){
      return res.status(404).send('No se encontró el objeto del gasto');
    }
    const unidad = await db.unidadmedida.findByPk(idunidad);
    if(!unidad){
      return res.status(404).send('No se encontró la unidad');
    }

    const historico = await db.tareas_historico.create({
      nombre:nombre,
      idobjeto:objeto.id,
      objeto:objeto.nombre,
      idgrupo:objeto.idgrupo,
      grupo:objeto.grupogasto.nombre,
      idunidad:unidad.id,
      unidad:unidad.nombre
    })

    return res.status(200).send(historico);    

  } catch (error) {
    return res.status(500).send(error);
  }
} 

  module.exports = {
    AllTareasH,
    create
}