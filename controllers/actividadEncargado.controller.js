const db = require("../models");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
const { resultado } = require("../models");
const { EqualOperator } = require("typeorm");
// controlador para crear una nueva ctividad


const newActividadEncargado = async (req, res) => {
    try {
        
        if (!req.body.idEmpleado) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.idActividad) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }

        await db.ACencargados.create({
          idEmpleado: req.body.idEmpleado ,
          idActividad: req.body.idActividad
        });
        return res.status(200).json({ status: "Ok" });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
};




//controlador para borrar un actividad del poa

const delete_actividadEncargado = async (req, res) => {
    try {
        if (!req.body.idEmpleado) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.idActividad) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        const delete_actividad = await db.ACencargados.update({
            isDelete: true
        }, {
            where: {
                idEmpleado: req.body.idEmpleado,
                idActividad: req.body.idActividad
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


const updateActividadEncargado = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        const resultado = await db.resultado.findOne({ where: { id: req.body.idResultado } })
        if (!resultado) {
            return res.status(404).json({ message: 'resultado incorrecto' });
        }
        const temporally = await db.actividad.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                estado: req.body.estado,
                tipoActividad: req.body.tipoActividad,
                categoria: req.body.categoria,
                idResultado: resultado.idResultado
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

const get_actividadEncargado = async (req, res) => {
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
const get_all_actividadesEncargado= async (req,res) =>{
    try{
        const all_actividades = await db.actividad.findAll(
           { where:{
            isDelete:false
          },
           include:[{
            model: db.resultado,
          }]
          }
        );
        if(!all_actividades){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_actividades);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
  };

const get_all_actividad_by_idResultado = async (req, res) => {
    try {
        const all_actividad = await db.actividad.findAll(
            {
                where: {
                    isDelete: false,
                    idResultado: req.params.idResultado
                },
                include: db.resultado
            }
        );
        if (!all_actividad) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividad);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}
const get_encargados_de_actividad = async (req, res) => {
    try{
        const encargados = await db.ACencargados.findAll({
            where:{
                idActividad:req.params.idActividad,
                isDelete:false
            }
        })
        const empleados = [];
        for (let i = 0; i < encargados.length; i++) {
            empleados.push(await db.empleado.findByPk(encargados[i].idEmpleado))
        }
        return res.status(200).send(empleados)
    }catch(e){
        return res.status(500).json({ status: "Server Error: " + e });
    }
}

module.exports = {
    newActividadEncargado,
    get_all_actividad_by_idResultado,
    get_actividadEncargado,
    updateActividadEncargado,
    delete_actividadEncargado,
    get_all_actividadesEncargado,
    get_encargados_de_actividad
}
