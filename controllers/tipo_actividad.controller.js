const db = require("../models");

//Funcion para crear una nueva Institucion
const create_tipo = async (req,res) =>{
    try{
        const tipo = await db.tipo_actividad.findOne({where:{tipo:req.body.tipo}})
        if(tipo){
            return res.status(400).json({message:'Nombre de Tipo ya utilizado'});
        }
        await db.tipo_actividad.create({
            tipo: req.body.tipo
        });
        return res.status(200).json({status:"Ok"});
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}


const get_tipo= async (req,res) =>{
    if(!req.params.id){
        return res.status(400).send('No envio el id de tipo a buscar')
    }
    try{
        const tipo = await db.tipo_actividad.findByPk(req.params.id)
        if(!tipo){
            return res.status(404).json({message:'No se encuentra ese tipo'});
        }
        return res.status(200).json(tipo);
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}
//Funcion para obtener todas las Instituciones
const get_all_tipos = async (req,res) =>{
    try{
        const all_tipo = await db.tipo_actividad.findAll({
            where:{isDelete:false}
        });
        if(!all_tipo){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_tipo);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para actualizar una Institucion
const update_tipo = async (req, res) => {
    try {
        const temporally = await db.tipo_actividad.update({
            tipo: req.body.tipo
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Tipo actualizado con exito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

//Funcion para deshabilitar una Institucion

const disable_tipo = async (req, res) => {
    try {
        const temporally = await db.tipo_actividad.update({
            isDelete : true
        }, {
            where: {
                id: req.params.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Tipo eliminado con éxito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

module.exports = {
    create_tipo,
    get_tipo,
    get_all_tipos,
    update_tipo,
    disable_tipo
  }