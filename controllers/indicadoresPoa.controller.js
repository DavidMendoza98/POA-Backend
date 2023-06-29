const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");

const allindicadores = async (req, res) => {
  try {
    const allIndicador = await db.indicadoresPoa.findAll({
      where: {
        isDelete: false,
      },
      include: [{
        model: db.actividad
      }]
    })
    return res.status(200).json(allIndicador);
  } catch (error) {
    res.status(400).json({
      message: 'error en la petición' + error
    })
  }
};

const newIndicador = async (req, res) => {
  try {
    const actividad = await db.actividad.findByPk(req.body.idActividad);
    if (!actividad) {
      res.status(404).send({ message: 'no se encontro la actividad' });
    }

    await db.indicadoresPoa.create({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      cantidadPlanificada: req.body.cantidadPlanificada,
      isCantidad: req.body.isCantidad,
      isPorcentaje: req.body.isPorcentaje,
      idActividad: actividad.id

    })
    res.status(200).json({
      message: 'Indicador creado con éxito'
    })

  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
};

const deleteIndicador = async (req, res) => {
  try {
    const indicadorDelete = await db.indicadoresPoa.update({
      isDelete: true
    }, {
      where: {
        id: req.params.id
      }
    });
    await db.planificacion.update({
      isDelete: true
    }, {
      where: {  
        idIndicador: indicadorDelete.id
      }
    });
    if (indicadorDelete) {
      res.status(200).send({
        message: "Indicador eliminado"
      });
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      message: "Error al elimiar el indicador " + error.message
    });
  }
};

const updateIndicador = async (req, res) => {
  try {
    if (!req.body.nombre) {
      return res.status(400).json({ message: 'Debe enviar todos los datos' });
    }
    const actividad = await db.actividad.findOne({ where: { id: req.body.idActividad } })
    if (!actividad) {
      return res.status(404).json({ message: 'Actividad incorrecta' });
    }
    const updateIndicador = await db.indicadoresPoa.update({
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      cantidadPlanificada: req.body.cantidadPlanificada,
      idActividad: actividad.idActividad
    }, {
      where: { id: req.body.id }
    });
    if (updateIndicador) {
      res.status(200).send({
        message: "Indicador actualizado con éxito",
        indicador: updateIndicador
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

const AllIndicador_by_idActividad = async (req, res) => {
  try {
    const allIndicador = await db.indicadoresPoa.findAll({
      where: {
        isDelete: false,
        idActividad: req.params.idActividad
      }, order: [
        // will return `createdAt`
        ['createdAt', 'DESC']]
    })
    resultado = [];

    for (const i of allIndicador) {
      let revisiones = await db.revision.findAll(
        {
          where: {
            idForaneo: i.id,
            tipo: "INDICADOR"
          }
        }
      )
      resultado.push({
        indicador: i,
        isRevision: revisiones.length > 0 ? true : false,
        revisiones: revisiones
      })

    }
    res.status(200).json(resultado);
  } catch (error) {
    res.status(400).json({
      message: 'error al ingresar' + error
    })
  }
};

const get_Depto = async (req, res) => {
  try {
    const departamento = await db.depto.findOne({ where: { id: req.params.id } })
    if (!departamento) {
      return res.status(404).json({ message: 'No se encuentra ese departamento' });
    }
    return res.status(200).json({ status: "Ok", departamento });
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
}

const get_indicador = async (req, res) => {
  try {
    const indicadores = await db.indicadoresPoa.findOne({ where: { id: req.params.id } })
    if (!indicadores) {
      return res.status(404).json({ message: 'No se encuentra ese departamento' });
    }
    return res.status(200).json({ status: "Ok", indicadores });
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
}


const seguimiento = async (req, res) => {
  try {

    const seguimientoIndicador = await db.indicadoresPoa.update({
      cantidadPlanificada: req.body.cantidadPlanificada,
      cantidadEjecutada: req.body.cantidadEjecutada,
      promedioAlcanzado: req.body.promedioAlcanzado,
    }, {
      where: { id: req.body.id }
    });
    if (seguimientoIndicador) {
      res.status(200).send({
        message: "Seguimiento actualizado con éxito",
        indicador: seguimientoIndicador
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
  }
};


module.exports = {
  allindicadores,
  newIndicador,
  deleteIndicador,
  updateIndicador,
  AllIndicador_by_idActividad,
  get_indicador,
  get_Depto,
  seguimiento
}