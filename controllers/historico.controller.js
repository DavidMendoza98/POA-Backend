const db = require("../models");
const { Op } = require("sequelize");

const get_historico = async (req, res) => {
  try {
    const {search,limit} = req.params;

    let historico = await db.tareas_historico.findAll({
      where: {
        isDelete: false,
        nombre: {
          [Op.like]: '%' + search + '%'
        }
      },
      include:[
        {model:db.objetogasto},
        {model:db.unidadmedida}
      ]
      ,
      limit: parseInt(limit)
    })
    if (!historico){
      historico = [];
    }

    return res.status(200).send(historico);
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor: ' + error
    })
  }
}
const get_historico_limit = async (req, res) => {
  try {
    const historico = await db.tareas_historico.findAll({
      where: {
        isDelete: false,
      },
      include:[
        {model:db.objetogasto},
        {model:db.unidadmedida}
      ],
      limit: parseInt(req.params.limit)
    })
    // if (!historico){
    //   historico = [];
    // }
    return res.status(200).send(historico);
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor: ' + error
    })
  }
}

const get_all_historico = async (req, res) => {
  try {

    let historico = await db.tareas_historico.findAll({
      where: {
        isDelete: false,
      },
      include:[
        {model:db.objetogasto},
        {model:db.unidadmedida}
      ],
      order: [['id', 'DESC']]
      
    })

    return res.status(200).send(historico);
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor: ' + error
    })
  }
}
const deleteHistorico = async (req, res) => {
  try {
    const {id} = req.body;
    if(!id){
      return res.status(400).send('No envió el id del recurso');
    }
    const historico = await db.tareas_historico.findByPk(id);
    if(!historico){
      return res.status(404).send('No se encuentra ese Recurso');
    }
    const temporally = await db.tareas_historico.update({
      isDelete:true
    },{
      where:{
        id:id
      }
    })
    if(temporally){
      return res.status(200).send(temporally);
    }
    return res.status(403).send("no actualizado");

    
  } catch (error) {
    res.status(500).json({
      message: 'Error en el servidor: ' + error
    })
  }
}
const create = async (req,res)=>{
 try {
    const {nombre,idObjeto,idUnidad} = req.body;
    if(!nombre){
      return res.status(400).send('No envió el nombre del recurso');
    }
    if(!idObjeto){
      return res.status(400).send('No envió el id del objeto gasto');
    }
    if(!idUnidad){
      return res.status(400).send('No envió el id de la unidad de medida');
    }

    const historico = await db.tareas_historico.create({
      nombre:nombre,
      idobjeto:idObjeto,
      idunidad:idUnidad
    })
    return res.status(200).send(historico);
 } catch (error) {
   console.log(error);
   return res.status(500).send(error);
 }
}

const update = async (req,res)=>{
  try {
     const {id,nombre,idObjeto,idUnidad} = req.body;
     if(!nombre){
       return res.status(400).send('No envió el nombre del recurso');
     }
     if(!idObjeto){
       return res.status(400).send('No envió el id del objeto gasto');
     }
     if(!idUnidad){
       return res.status(400).send('No envió el id de la unidad de medida');
     }
     if(!id){
      return res.status(400).send('No envió el id del historico');
    }
 
     const historico = await db.tareas_historico.update({
       nombre:nombre,
       idobjeto:idObjeto,
       idunidad:idUnidad
     },{
      where:{
        id:id
      }
     })
     return res.status(200).send(historico);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
 }

module.exports = {
  get_historico,
  get_historico_limit,
  get_all_historico,
  deleteHistorico,
  create,
  update
}