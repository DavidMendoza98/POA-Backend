const db = require("../models");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
const { resultado, pei } = require("../models");
// controlador para crear una nueva ctividad


const newActividad = async (req, res) => {
    try {
        const actividad = await db.actividad.findOne({ where: { nombre: req.body.nombre } })
        if (actividad) {
            return res.status(400).json({ message: 'Nombre de Actividad ya utilizado' });
        }
        
        const poaDepto = await db.poa_depto.findOne({ where: { id: req.body.idPoaDepto } })
        
        if (!poaDepto) {
            return res.status(404).json({ message: 'poa del departamento incorrecto' });
        }
        const poa = await db.poa.findOne({ where: { id: poaDepto.idPoaUE} })
        if (!poa) {
            return res.status(404).json({ message: 'poa incorrecto' });
        }
        
        const actividadCreada = await db.actividad.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            resultadoActividad:req.body.resultadoActividad,
            estado: "FORMULACION",
            tipoActividad: req.body.tipoActividad,
            categoria: req.body.categoria,
            idPoa: poa.id,
            idPoaDepto: poaDepto.id,
            idDepto:poaDepto.idDepto,
            idInstitucion: poa.idInstitucion,
            idUE: poa.idUE,
            idResultado:req.body.idResultado
        });
        await db.ACencargados.create({
               idActividad: actividadCreada.id,
               idEmpleado: req.body.responsables
        });
        // for (let i = 0; i < req.body.responsables.length; i++) {
        //     await db.ACencargados.create({
        //         idActividad: actividadCreada.id,
        //         idEmpleado: req.body.responsables[i]
        //     });
        // }
        return res.status(200).json({ status: "Ok" });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
};




//controlador para borrar un actividad del poa

const delete_actividad = async (req, res) => {
    try {
        const delete_actividad = await db.actividad.update({
            isDelete: true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (delete_actividad) {
            res.status(200).send({
                message: "actividad eliminada correctamente"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


const updateActividad = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.nombre) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.descripcion) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
      
        if (!req.body.resultadoActividad) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.tipoActividad) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.categoria) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        const poaDepto = await db.poa_depto.findOne({ where: { id: req.body.idPoaDepto } })
        
        if (!poaDepto) {
            return res.status(404).json({ message: 'poa del departamento incorrecto' });
        }
        const poa = await db.poa.findOne({ where: { id: poaDepto.idPoaUE} })
        if (!poa) {
            return res.status(404).json({ message: 'poa incorrecto' });
        }
        
        const temporally = await db.actividad.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                resultadoActividad:req.body.resultadoActividad,
                tipoActividad: req.body.tipoActividad,
                categoria: req.body.categoria,
                idPoa: poa.id,
                idPoaDepto: poaDepto.id,
                idDepto:poaDepto.idDepto,
                idInstitucion: poa.idInstitucion,
                idUE: poa.idUE,
                idResultado:req.body.idResultado
            },
            { where: { id: req.body.id } });

        if (temporally) {
            res.status(200).send({
                message: "Actividad actualizada con exito",
                actividad: temporally
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const get_actividad = async (req, res) => {
    try {
        const actividad = await db.actividad.findOne({ where: { id: req.params.id } })
        if (!actividad) {
            return res.status(404).json({ message: 'No se encuentra esa actividad' });
        }
        return res.status(200).json({ status: "Ok", actividad });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


//Funcion para obtener todas las actividades
const get_all_actividades = async (req, res) => {
    try {
        const all_actividades = await db.actividad.findAll(
            {
                where: {
                    isDelete: false
                },
                include: [{
                    model: db.poa,
                },{
                    model: db.resultado
                }]
            }


        );
        if (!all_actividades) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividades);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
};

const get_all_actividad_by_idPoa = async (req, res) => {
    try {
        const all_actividad = await db.actividad.findAll(
            {
                where: {
                    isDelete: false,
                    idPoaDepto: req.params.idPoa
                },
                include: [{
                    model: db.poa
                }],order:[
                    ['createdAt','DESC']]
            })
        if (!all_actividad) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividad);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


const probando_like = async(req,res) => { 
  try{ 
    const resultado = await db.resultado.findOne({
      where: {
        nombre: {
          [Op.substring]: req.params.nombre,
        }
    }
    });
  res.status(200).json( {status:"Ok",resultado} );
} catch(error){
    res.status(400).json({
      message:'error al mostrar' + error
    })
}
};

const setEstadoDeActividad = async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.estado) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        
        const temporally = await db.actividad.update(
            {
                estado: req.body.estado
            },
            { where: { id: req.body.id } });

        if (temporally) {
            res.status(200).send({
                message: "Actividad actualizada con exito",
                actividad: temporally
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

module.exports = {
    newActividad,
    get_all_actividad_by_idPoa,
    get_actividad,
    updateActividad,
    delete_actividad,
    get_all_actividades,
    probando_like,
    setEstadoDeActividad
}