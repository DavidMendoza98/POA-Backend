const db = require("../models");
//////////////////////////////////////////////////////////////
// Controlador para crear planificacion
//////////////////////////////////////////////////////////7
const new_Planificacion = async (req, res) => {
  try {
    const Planificacion = await db.planificacion.findOne({
      where: {
        trimestre: req.body.trimestre,
        isDelete: false,
      },
    });

    // Valida que la planificación exista y que este activa
    if (Planificacion) {
      return res.status(400).json({ message: "La planificación ya existe" });
    }

    await db.planificacion.create({
      trimestre: req.body.trimestre,
      cantidad: req.body.cantidad,
      fechaInicio: req.body.fechaInicio,
      fechaFin: req.body.fechaFin,
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
    const all_Planificacion = await db.planificacion.findAll({
      where: {
        isDelete: false,
      },
    });
    // Valida el caso de que no existan registros de planificacion
    if (!all_Planificacion) {
      return res
        .status(404)
        .send({ message: "No hay planificaciones registradas" });
    }
    return res.status(200).json(all_Planificacion);
  } catch (error) {
    return res.status(500).json({ status: "Server Error: " + error });
  }
};

/////////////////////////////////////////////////////////////
// Controlador para actualizar una planificacion
////////////////////////////////////////////////////////////
const update_Planificacion = async (req, res) => {
  try {
    // Busca la planificacion con el id a actualizar para validar que exista.
    const Planificacion = await db.planificacion.findOne({
      where: {
        id: req.body.id,
        isDelete: false,
      },
    });
    console.log(Planificacion);
    // Valida el caso de que la planificacion a actualizar no exista.
    if (Planificacion) {
      const temporally = await db.planificacion.update(
        {
          trimestre: req.body.trimestre,
          cantidad: req.body.cantidad,
          fechaInicio: req.body.fechaInicio,
          fechaFin: req.body.fechaFin,
        },
        {
          where: {
            id: req.body.id,
            isDelete: false,
          },
        }
      );

      console.log(temporally);
      // Valida que la planificacion se haya actualizado
      if (temporally) {
        res.status(200).send({
          message: "La planificación se ha actualizado con exito",
        });
      }
    } else {
      return res
        .status(404)
        .send({
          message: "La planificacion a actualizar no existe",
          Planificacion,
        });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "Server Error: " + error });
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
      res.status(200).send({ message: "la planificacion a borrar no existe" });
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

module.exports = {
  new_Planificacion,
  get_all_Planificacion,
  disable_Planificacion,
  update_Planificacion,
  get_Planificacion,
};