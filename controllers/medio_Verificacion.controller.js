var fs = require('fs');
var path = require('path');
const db = require("../models/");

const registro_medio = async function(req,res){
    try {
        let data = req.body;
            var img_path = req.files.url.path;
            console.log(req.files.url)

            var name = img_path.split('\\');
            var name_url = name[2];
            data.url = name_url;
            data.nombre_Archivo=req.files.url.originalFilename
            let reg = await db.medioVerificacion.create(data);
            res.status(200).send({data:reg})
    } catch (error) {
        res.status(500).send({message: 'Error'});
    }
        
}

const listar_medios = async function(req,res){
    try {
        var reg = await db.medioVerificacion.findAll();
        res.status(200).send({data:reg});
    } catch (error) {
        res.status(500).send({message: 'NoAccess'});
    }
}

const obtener_archivo = async function(req,res){
    var file = req.params['file'];
    console.log(req.params.file)
    const data = await db.medioVerificacion.findOne({where:{url:req.params['file']}})
    fs.stat('./uploads/img/'+file, function(err){
                if(!err){
            let path_file = './uploads/img/'+file;
            res.status(200).download(path.resolve(path_file),data.nombre_Archivo);
        }else{
            console.log(err)
            res.status(500).send({message:'Error'});
        }
    })
}

const actualizar_medio = async function(req,res){
        try {
            
       
        let id = req.params['id'];
        let data = req.body;

        if(req.files){
            //SI HAY IMAGEN
            var img_path = req.files.url.path;
            var name = img_path.split('\\');
            var url_name = name[2];
            var nombre_Archivo_name = req.files.url.originalFilename
            let reg = await db.medioVerificacion.update({
                nombre: data.nombre,
                descripcion: data.descripcion,
                url: url_name,
                nombre_Archivo: nombre_Archivo_name
            });

            fs.stat('./uploads/productos/'+reg.portada, function(err){
                if(!err){
                    fs.unlink('./uploads/productos/'+reg.portada, (err)=>{
                        if(err) throw err;
                    });
                }
            })

            res.status(200).send({data:reg});
        }else{
            //NO HAY IMAGEN
           let reg = await db.medioVerificacion.update({
            nombre: data.nombre,
            descripcion: data.descripcion
           });
           res.status(200).send({data:reg});
        } } catch (error) {
            res.status(500).send({message: 'NoAccess'}); 
        }
    
}

const obtener_medio = async function(req,res){
   
        var id = req.params['id'];

        try {
            var reg = await db.medioVerificacion.findOne({where:{id:id}});
            res.status(200).send({data:reg});
        } catch (error) {
            res.status(200).send({data:undefined});
        }
}

module.exports = {
    registro_medio,
    listar_medios,
    obtener_archivo,
    actualizar_medio,
    obtener_medio
}