const db = require("../models/");

//Funcion para crear una nueva dimension
const new_dimension = async (req,res) =>{
    try{
        const dimension = await db.dimension.findOne({where:{nombre:req.body.nombre}})
        if(dimension){
            return res.status(400).json({message:'Nombre de Dimension ya utilizado'});
        }
        await db.dimension.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            idPei : req.body.idPei
        });
        return res.status(200).json({status:"Ok"});
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para obtener una unica dimension
const get_dimension = async (req,res) =>{
    try{
        const dimension = await db.dimension.findOne({where:{id:req.params.id}})
        if(!dimension){
            return res.status(404).json({message:'No se encuentra esa dimension'});
        }
        return res.status(200).json({status:"Ok",dimension});
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}
//Funcion para obtener todas las dimensiones
const get_all_dimension = async (req,res) =>{
    try{
        const all_dimension = await db.dimension.findAll(
           { where:{isDelete:false},
            include:db.pei}
        );
        if(!all_dimension){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_dimension);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

const get_all_dimension_by_idPei = async (req,res) =>{
    try{
        
            all_dimension = await db.dimension.findAll(
                { where:{isDelete:false,
                            idPei : req.params.idPei},
                            include:[{
                                model:db.pei,
                            }],order:[[
                                'createdAt','DESC']]
                            })
        if(!all_dimension){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_dimension);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}
const get_all_dimension_by_idPeiSegunRequest = async (req,res) =>{
    try{
        
            const empleado = await db.empleado.findOne(
                {
                    where : {
                        id:req.usuario.idEmpleado},
                    include : [model=db.ue]
                } 
            )

            const pei = await db.pei.findOne({where:{idInstitucion:empleado.ejecutora.idInstitucion, isActive:1}})
            all_dimension = await db.dimension.findAll(
            { where:{isDelete:false,
                        idPei : pei.id},
                        include:[{
                            model:db.pei,
                        }],order:[[
                            'createdAt','DESC']]
                        })
        
        if(!all_dimension){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_dimension);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para actualizar una dimension
const update_dimension = async (req, res) => {
    try {
        if(!req.body.nombre){
            return res.status(400).json({message:'Debe enviar todos los datos'});
        }
        const temporally = await db.dimension.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            idPei : req.body.idPei
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Dimension actualizada con exito",
                dimension : temporally
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

//Funcion para deshabilitar una dimension

const disable_dimension = async (req, res) => {
    try {
        const temporally = await db.dimension.update({
            isDelete : true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Dimension eliminada con exito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

module.exports = {
    new_dimension,
    get_all_dimension,
    disable_dimension,
    update_dimension,
    get_dimension,
    get_all_dimension_by_idPei,
    get_all_dimension_by_idPeiSegunRequest
  }