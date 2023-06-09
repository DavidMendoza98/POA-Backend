const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
const { planificacion, medioVerificacion } = require("../models/");


const allSeguimientos = async (req, res) => {
    try {
        const allSeguimiento = await db.seguimiento.findAll({
            where: {
                isDelete: false,
            },
            include: [{
                model: db.actividad,
                model: db.tarea,
                model: db.planificacion,
                model: db.medioVerificacion
            }]
        })
        return res.status(200).json(allSeguimiento);
    } catch (error) {
        res.status(400).json({
            message: 'error en la petición' + error
        })
    }
};



const newSeguimiento = async (req, res) => {
    try {
        const actividad = await db.actividad.findByPk(req.body.idActividad);
        if (!actividad) {
            res.status(404).send({ message: 'no se encontro la actividad' });
        }
        const tarea = await db.tarea.findByPk(req.body.idtarea);
        if (!tarea) {
            res.status(404).send({ message: 'no se encontro la tarea' });
        }
        const planificacion = await db.planificacion.findByPk(req.body.idPlanificacion);
        if (!planificacion) {
            res.status(404).send({ message: 'no se encontro la planificacion' });
        }
        const medioVerificacion = await db.medioVerificacion.findByPk(req.body.idMedVer);
        if (!medioVerificacion) {
            res.status(404).send({ message: 'no se encontro el medio de verificacion' });
        }
        await db.seguimiento.create({
            seguimientoTarea: req.body.seguimientoTarea,
            porcentajeIndicador: req.body.porcentajeIndicador,
            fechaRealizacion: req.body.fechaRealizacion,
            idMedVer: medioVerificacion.id,
            idActividad: actividad.id,
            idtarea: tarea.id,
            idPlanificacion: planificacion.id,



        })
        res.status(200).json({
            message: 'seguimiento creado con éxito'
        })

    } catch (error) {
        res.status(400).json({
            message: 'error al ingresar' + error
        })
    }
};

const updateSeguimiento = async (req, res) => {
    try {
        if (!req.body.seguimientoTarea) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        const actividad = await db.actividad.findOne({ where: { id: req.body.idActividad } })
        if (!actividad) {
            return res.status(404).json({ message: 'Actividad incorrecta' });
        }
        const tarea = await db.tarea.findByPk(req.body.idTarea);
        if (!tarea) {
            res.status(404).send({ message: 'no se encontro la tarea' });
        }
        const planificacion = await db.planificacion.findByPk(req.body.idPlanificacion);
        if (!planificacion) {
            res.status(404).send({ message: 'no se encontro la planificacion' });
        }
        const medioVerificacion = await db.medioVerificacion.findByPk(req.body.idMedVer);
        if (!medioVerificacion) {
            res.status(404).send({ message: 'no se encontro el medio de verificacion' });
        }
        const updateSeguimiento = await db.seguimiento.update({
            seguimientoTarea: req.body.seguimientoTarea,
            porcentajeIndicador: req.body.porcentajeIndicador,
            fechaRealizacion: req.body.fechaRealizacion,
            idActividad: actividad.id,
            idTarea: tarea.id,
            idPlanificacion: planificacion.id,
            idMedVer: medioVerificacion.id
        }, {
            where: { id: req.body.id }
        });
        if (updateSeguimiento) {
            res.status(200).send({
                message: "Seguimiento actualizado con éxito",
                seguimiento: updateSeguimiento
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
};

const AllSeguimiento_by_idTarea = async (req, res) => {
    try {
        const allSeguimientos = await db.seguimiento.findAll({
            include: [{
                model: db.tarea,
            }], order: [
                // will return `createdAt`
                ['createdAt', 'DESC']]
        })
        res.status(200).json(allSeguimientos);
    } catch (error) {
        res.status(400).json({
            message: 'error al ingresar' + error
        })
    }
};
const newMedVer = async (req, res) => {
    try {
        await db.medioVerificacion.create({
            url: req.body.url
        })
        res.status(200).json({
            message: 'Medio de Verificacion Creado creado con éxito'
        })

    } catch (error) {
        res.status(400).json({
            message: 'error al ingresar' + error
        })
    }
};

const get_poas_for_tracking = async (req,res) =>{
    try {
        if (!req.usuario) {
            return res.status(401).send({ "message": "No ha sido posible obtener los datos del usuario" })
        }
        const empleado = await db.empleado.findOne({
            where:{
                id:req.usuario.idEmpleado,
                isDelete:false
            }
        })
        if (!empleado) {
            return res.status(404).send({ "message": "Empleado no encontrado en la base de datos" })
        }
        


    } catch (error) {
        console.log(error)
        return res.status(500).send({ "message": 'Error al obtener los datos de las planificacion para dar seguimiento ', "error": error });
    }
}


module.exports = {
    allSeguimientos,
    AllSeguimiento_by_idTarea,
    updateSeguimiento,
    newSeguimiento,
    newMedVer
}