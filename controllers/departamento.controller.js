const { empleado } = require("../models");
const db = require("../models");
const { Op } = require("sequelize");



const getEmpleados = async (req,res) =>{
    try{
        const depto = await db.depto.findByPk(req.params.id);
        if(!depto) return res.status(404).json({message:"Departamento no encontrado"});

        const empleados_list_ids = await db.empleado_depto.findAll(
            {
                where:{
                    idDepto: req.params.id,
                    idUnidadEjecutora:req.usuario.idUE
                }
            }
        )
        if(!empleados_list_ids) return res.status(404).json({message:"No hay empleados asignados al departamento"});
        const empleados = [];
        for (let i = 0; i < empleados_list_ids.length; i++) {
            empleados.push(await db.empleado.findByPk(empleados_list_ids[i].idEmpleado));
        }

        return res.status(200).send(empleados);

    }catch(error){
        return res.status(500).json({error})
    }
}
//Funcion para crear una nueva Institucion
const new_depto = async (req,res) =>{
    try{
        const depto = await db.depto.findOne({where:{name:req.body.nombre}})
        if(depto){
            return res.status(400).json({message:'Nombre de Departamento ya utilizado'});
        }
        
        await db.depto.create({
            name: req.body.nombre,
            siglas: req.body.siglas,
            estructura: req.body.estructura,
            tipo:req.body.tipo,
            idUnidadEjecutora:req.usuario.idUE
        });
        return res.status(200).json({status:"Ok"});
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para obtener una unica departamento
const get_all_deptos = async (req,res) =>{
    try{
        const all_deptos = await db.depto.findAll({
            where:{isDelete:false,
                idUnidadEjecutora:req.usuario.idUE}
        });
        if(!all_deptos){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_deptos);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}
//Funcion para obtener todas las departamento
const get_depto= async (req,res) =>{
    try{
        const depto = await db.depto.findByPk(req.params.id)
        if(!depto){
            return res.status(404).json({message:'No se encuentra ese Departamento'});
        }
        return res.status(200).json(depto);
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para actualizar un departamento
const update_depto = async (req, res) => {
    try {
        const temporally = await db.depto.update({
            name: req.body.nombre,
            siglas: req.body.siglas,
            estructura: req.body.estructura,
            tipo:req.body.tipo,
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Departamento actualizado con exito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

//Funcion para deshabilitar una departamento

const disable_depto = async (req, res) => {
    try {
        const temporally = await db.depto.update({
            isDelete : true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Departamento eliminada con exito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

const get_my_deptos = async (req,res) =>{
    try{
        if(!req.usuario.idEmpleado){
            return res.status(404).send({"message":"No se encontro datos del usuario"})
        }

        let  listEmpleadoDeptos = await db.empleado_depto.findAll({
            where:{
                idEmpleado:req.usuario.idEmpleado
            }
        })

       const listIdsDeptosByIdEmpleado = await listEmpleadoDeptos.map(item => item.idDepto);
        const deptos = await db.depto.findAll({
                where:{
                    isDelete:false,
                    id:{[Op.in]:  listIdsDeptosByIdEmpleado}
                }
        })

        if(!deptos){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(deptos);
    }catch(error){
        return res.status(500).json({error:"Server Error: "});
    }
}

module.exports = {
    new_depto,
    get_all_deptos,
    get_depto,
    update_depto,
    disable_depto,
    get_my_deptos,
    getEmpleados
}