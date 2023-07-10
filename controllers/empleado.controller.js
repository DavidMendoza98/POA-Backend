const db = require("../models/");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");



const new_Empleado = async (req,res) =>{
    try{
        //db.sequelize.authenticate();
        const empleadoCreado = await db.empleado.create({
            dni: req.body.dni,
            num_empleado: req.body.num_empleado,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono : req.body.telefono,
            fechaNacimiento : req.body.fechaNacimiento,
            sexo: req.body.sexo,
            idUnidadEjecutora: req.body.idUnidadEjecutora
        });
        const deptos = JSON.parse(req.body.list_deptos);
        for (const i of deptos) {
           await db.empleado_depto.create({
                idEmpleado: empleadoCreado.id,
                idDepto : i
            });
            
        }
        return res.status(200).json({status:"ok"});
    } catch(error){
        console.log("error: " + error);
        return res.status(400).json({status:"error", error : error});
    }
}

const newDeptoForEmpleado = async (req, res) =>{
    try{
        const deptos = JSON.parse(req.body.list_deptos);
        for (const i of deptos) {
            let posibleEntrada = await db.empleado_depto.findOne(
                {
                    where:{
                        idEmpleado: req.body.idEmpleado,
                        idDepto : i
                    }
                }
            )
            if(posibleEntrada){
                continue;
            }
           await db.empleado_depto.create({
                idEmpleado: req.body.idEmpleado,
                idDepto : i
            });
            
        }
        return res.status(200).json({status:"ok"});
    } catch(error){
        console.log("error: " + error);
        return res.status(500).json({status:"error", error : error});
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

        const empleados = await db.empleado.findAll({
            where:{
                isDelete:false,
                idUnidadEjecutora:req.usuario.idUE,
                id : {
                    [Op.ne]:1
                } 
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

const update_empleado = async (req, res) => {
    try {
        const temporally = await db.empleado.update({
            dni: req.body.dni,
            num_empleado: req.body.num_empleado,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            direccion: req.body.direccion,
            telefono : req.body.telefono,
            fechaNacimiento : req.body.fechaNacimiento,
            sexo: req.body.sexo,
            idUnidadEjecutora: req.body.idUnidadEjecutora
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Empleado actualizad con éxito",
                empleado: temporally,
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

const disable_empleado = async (req, res) => {
    try {
        const temporally = await db.empleado.update({
            isDelete : true
        }, {
            where: {
                id: req.params.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Empleado eliminado con éxito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

const getDeptoByIdEmpleado = async (req,res) =>{
    try{
        const empDepto = await db.empleado_depto.findAll({
            where: {
                idEmpleado: req.params.idEmpleado
              }
        });
        if(!empDepto){
            return res.status(400).json("<h1>No existe el usuario</h1>");
        }
        return res.status(200).json(empDepto);
    }catch(error){
        return res.status(500).json({status:"Server Error", error:error});
    }
}


const get_deptos = async (req,res) =>{
    try{
        if(!req.usuario.idUE){
            return res.status(404).send({"message":"No se pudo encontrar datos del usuario"})
        }
        const deptos = await db.depto.findAll({
            where:{
                isDelete:false,
                idUnidadEjecutora:req.usuario.idUE
            }
        })
        if(!deptos){
            return res.status(400).send("<h1>No existe ni un empleado</h1>");
        }
        return res.status(200).json(deptos);
    }catch(error){
        return res.status(500).json({status:"Server Error ", error:error});
    }
}

const get_deptos_by_id_empleado = async(req,res) =>{
    try{
        const id_deptos = await db.empleado_depto.findAll({where:{
            idEmpleado : req.body.idEmpleado
        }})
        const deptos = []
        for(let i = 0; i < id_deptos.length; i++){
            deptos.push(await db.depto.findOne({where:{id:id_deptos[i].idDepto}}))
        }

        if(!id_deptos){
            return res.status(404).send({message:'el el empleado no tiene departamentos'});
        }
        return res.status(200).send(deptos);
    }catch(e){
        return res.status(500).send({message:'empleado no encontrado'});
    }

}
const AllEmpleados_responsables_tarea = async (req,res)=>{
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).send('No envió todos los datos')
        }

        let empleado_tareas = await db.tarea_encargado.findAll({
            where:{
                isDelete:false,
                idTarea:id
            }
        });

        let empleados = empleado_tareas.map((item)=> item.idEmpleado);

        const empleados_list = await db.empleado.findAll({
            where:{
                isDelete:false,
                id : {
                    [Op.in]:empleados,
                    [Op.ne]:1
                }
            }
        })
        return res.status(200).send(empleados_list);

    } catch (error) {
        return res.status(500).send({message:'empleado no encontrado'});
    }
}
const addEmpleado_Tarea = async (req,res)=>{
    const {idEmpleado,idTarea} = req.body;
    if(!idEmpleado){
        return res.status(404).send({"message":"No se envio todos los datos"})
    }
    if(!idTarea){
        return res.status(404).send({"message":"No se envio todos los datos"})
    }
    try {
        const tarea = await db.tarea.findByPk(idTarea);
        const registro = await db.tarea_encargado.create({
            idEmpleado,
            idTarea,
            idActividad:tarea.idActividad
        })

        return res.status(200).send(registro);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:'Error al registrar'});
    }
}

const eliminarEmpleado_Tarea = async (req,res)=>{
    const {idEmpleado, idTarea} = req.body;
    if(!idEmpleado){
        return res.status(400).send('No envió todos los datos');
    }
    if(!idTarea){
        return res.status(400).send('No envió todos los datos');
    }
    console.log(`#############`);

    try {
        const update = await db.tarea_encargado.update({
            isDelete: true
        },{
            where:{
                idEmpleado:idEmpleado,
                idTarea:idTarea
            }
        })
        if(!update){
            return res.status(400).send('No se elimino');
        }

        return res.status(200).send(update);
    } catch (error) {
        console.log(error);
        return res.status(500).send({message:'Error al registrar'});
    }
}


const deleteDepto = async(req,res) => {
    try{
      // const id = req.params.id * 1;
      // const filaDelete = db.compositor.findOne(el => el.id === id);
      const deleteDepto = await db.empleado_depto.destroy({
        where:{
            idEmpleado:req.params.idEmpleado,
            idDepto : req.params.idDepto
        }
      });
      if(deleteDepto){
    return res.status(200).json({status:"Elemento encontrado", deleteDepto});
    }else{
      return res.status(404).json({message:'No se encuentra lo solicitado'});
    }
  
    } catch(error){
    return res.status(500).json({status:"Server Error: " + error});
  
    }
  }


module.exports = {
    get_empleado_by_id,
    get_empleados,
    update_empleado,
    disable_empleado,
    get_deptos,
    new_Empleado,
    get_deptos_by_id_empleado,
    getDeptoByIdEmpleado,
    newDeptoForEmpleado,
    deleteDepto,
    AllEmpleados_responsables_tarea,
    addEmpleado_Tarea,
    eliminarEmpleado_Tarea
  }