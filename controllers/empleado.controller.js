const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");

const new_empleado = async (req,res) =>{
    try{
        //db.sequelize.authenticate();
        await db.empleado.create({
            dni: req.body.dni,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono : req.body.telefono,
            fechaNacimiento : req.body.fecha_nacimiento,
            sexo: req.body.sexo,
            idInstitucion: req.body.idInstitucion
        });
        return res.status(200).json({status:"ok"});
    } catch(error){
        console.log("error: " + error);
        return res.status(400).json({status:"error", error : error});
    }
}

const get_empleado_by_id = async (req,res) =>{
    try{
        const empleado = await db.empleado.findByPk(req.params.id,{
            where: {
                isDelete: false,
              },
              include: [{
                model: db.institucion,
              }]
        });
        if(!empleado){
            return res.status(400).send("<h1>No existe el usuario</h1>");
        }
        return res.status(200).json(empleado);
    }catch(error){
        return res.status(400).json({status:"Bad Request", error:error});
    }
}
const get_empleados = async (req,res) =>{
    try{
        if(!req.usuario.idUE){
            return res.status(404).send({"message":"No se pudo encontrar datos del usuario"})
        }

        // const empleados_deptos = await db.empleado_depto.findAll({
        //     where:{
        //         idDepto : req.params.idDepto
        //     },include:[{model:db.empleado, where:{idUnidadEjecutora:req.usuario.idUE}}]
        // })

        // const id_empleados = empleados_deptos.map( objeto => objeto.idEmpleado);
        // empleados = []
        // for (let index = 0; index < id_empleados.length; index++) {
        //     empleados.push(await db.empleado.findByPk(id_empleados[index]));
            
        // }
        const empleados = await db.empleado.findAll({
            where:{
                isDelete:false,
                idUnidadEjecutora:req.usuario.idUE
            }
        })
        if(!empleados){
            return res.status(400).send("<h1>No existe ni un empleado</h1>");
        }
        return res.status(200).json(empleados);
    }catch(error){
        return res.status(500).json({status:"Server Error ", error:error});
    }
}
const AllEmpleados_responsables_tarea = async (req,res)=>{
try {
    if(!req.params.idTarea){
        return res.status(400).send({'message':'No envió todos los datos'});
    }

    const all_tarea_encargado = await db.tarea_encargado.findAll({
        where:{
            isDelete:false,
            idTarea: req.params.idTarea
        }
    })
    const id_empleados = all_tarea_encargado.map(item => item.idEmpleado);

    const all_empleados = await db.empleado.findAll({
        where:{
            isDelete:false,
            id: {[Op.in]:  id_empleados}
        }
    })
    return res.status(200).send(all_empleados);
} catch (error) {
    return res.status(500).json({status:"Server Error ", error:error});
}
}

module.exports = {
    new_empleado,
    get_empleado_by_id,
    get_empleados,
    AllEmpleados_responsables_tarea
  }