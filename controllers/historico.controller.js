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

module.exports = {
  get_historico,
  get_historico_limit
}