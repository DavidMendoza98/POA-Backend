const db = require("../models");

//Funcion para crear una nueva Institucion
const create_categoria = async (req,res) =>{
    try{
        const categoria = await db.categoria.findOne({where:{categoria:req.body.categoria}})
        if(categoria){
            return res.status(400).json({message:'Nombre de Categoria ya utilizado'});
        }
        await db.categoria.create({
            categoria: req.body.categoria
        });
        return res.status(200).json({status:"Ok"});
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}


const get_categoria= async (req,res) =>{
    if(!req.params.id){
        return res.status(400).send('No envio el id de categoria a buscar')
    }
    try{
        const categoria = await db.categoria.findByPk(req.params.id)
        if(!categoria){
            return res.status(404).json({message:'No se encuentra esa Institucion'});
        }
        return res.status(200).json(categoria);
    } catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}
//Funcion para obtener todas las Instituciones
const get_all_categorias = async (req,res) =>{
    try{
        const all_Categoria = await db.categoria.findAll({
            where:{isDelete:false}
        });
        if(!all_Categoria){
            return res.status(404).send({message:'no hay ningun elemento'});
        }
        return res.status(200).json(all_Categoria);
    }catch(error){
        return res.status(500).json({status:"Server Error: " + error});
    }
}

// Funcion para actualizar una Institucion
const update_categoria = async (req, res) => {
    try {
        const temporally = await db.categoria.update({
            categoria: req.body.categoria
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Categoria actualizada con exito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

//Funcion para deshabilitar una Institucion

const disable_categoria = async (req, res) => {
    try {
        const temporally = await db.categoria.update({
            isDelete : true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "Categoria eliminada con éxito"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:"Server Error: " + error});
    }
}

module.exports = {
    create_categoria,
    get_categoria,
    get_all_categorias,
    update_categoria,
    disable_categoria
  }