const db = require("../models/");

const new_ue_presupuesto = async (req, res) => {
    try{
        const ue_presupuesto = await db.ue_presupuesto.findOne({
            where:{
                anio:req.body.anio,
                idUnidadEjecutora: req.body.idUnidadEjecutora
            }
        })

        if(ue_presupuesto){ return res.status(403).send({message:'Error, elemento ya existe'})};

        await db.ue_presupuesto.create({
            anio: req.body.anio,
            fuente11: req.body.fuente11,
            fuente12:req.body.fuente12,
            fuente12B: req.body.fuente12B,
            idUnidadEjecutora:req.body.idUnidadEjecutora
        })
        return res.status(200).send({message:'ok'});
    }catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}

const update_ue_presupuesto  = async (req, res) => {
    try{
        const ue_presupuesto = await db.ue_presupuesto.findOne({
            where:{
                anio:req.body.anio,
                idUnidadEjecutora: req.body.idUnidadEjecutora
            }
        })

        if(!ue_presupuesto){ return res.status(404).send({message:'Error, elemento no encontrado'})};

        await db.ue_presupuesto.update({
            anio: req.body.anio,
            fuente11: req.body.fuente11,
            fuente12:req.body.fuente12,
            fuente12B: req.body.fuente12B,
            idUnidadEjecutora:req.body.idUnidadEjecutora
        }, {
            where:{
                id: ue_presupuesto.id
            }
        })
        return res.status(200).send({message:'ok'});
    }catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const delete_ue_presupuesto  = async (req, res) => {
    try{

        await db.ue_presupuesto.update({
            idDelete : true
        },{
            where:{
                id:req.params.id
            }
        })

        return res.status(200).send({message:'eliminado correctamente'})

    } catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const set_habilitado  = async (req, res) => {
    try{
        const ue_presupuesto = await db.ue_presupuesto.findOne({
            where:{
                id:req.body.id
            }
        })

        if(!ue_presupuesto){ return res.status(404).send({message:'Error, elemento no encontrado'})};

        await db.ue_presupuesto.update({
            isActive:true
        }, {
            where:{
                id: ue_presupuesto.id
            }
        })
        return res.status(200).send({message:'Habilitado con éxito'});
    }catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const set_prederminado  = async (req, res) => {
    try{
        const ue_presupuesto = await db.ue_presupuesto.findOne({
            where:{
                id:req.body.id
            }
        })

        if(!ue_presupuesto){ return res.status(404).send({message:'Error, elemento no encontrado'})};

        await db.ue_presupuesto.update({
            esPrederminado:false
        }, {
            where:{
                idUE: req.body.idUE
            }
        })

        await db.ue_presupuesto.update({
            esPrederminado:true
        }, {
            where:{
                id: ue_presupuesto.id
            }
        })
        return res.status(200).send({message:'Predeterminado con éxito'});
    }catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const get_all_ue_presupuesto  = async (req, res) => {
    try{
        const all_ue_presupuesto = await db.ue_presupuesto.findAll({
            where:{
                idUnidadEjecutora:req.params.idUnidadEjecutora
            }
        })
        return res.status(200).send(all_ue_presupuesto);
    } catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const get_one_ue_presupuesto  = async (req, res) => {
    try{
        const ue_presupuesto = await db.ue_presupuesto.findOne({
            where:{
                id:req.params.id
            }
        })
        if(!ue_presupuesto){
            return res.status(404).send(ue_presupuesto);
        }
        return res.status(200).send(ue_presupuesto);
    } catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}
const get_status_ue_presupuesto  = async (req, res) => {
    try{
        let fuente11 = 0;
        let fuente12 = 0;
        let fuente12B = 0;

        const poa = await db.poa.findOne({
            where:{
                idUE:req.params.idUnidadEjecutora,
                anio:req.params.anio
            }
        })
        if(!poa){
            return res.status(404).send({message:'Poa unidad ejecutora no encontrado'});
        }
        const poa_deptos = await db.poa_depto.findAll({
            idPoaUE:req.params.idUnidadEjecutora
        })
        // const presupuesto = await db.ue_presupuesto.findOne(
        //     {where:{
        //         idUnidadEjecutora : req.params.idUnidadEjecutora,
        //         anio:req.params.anio
        //     }}
        // )
        for (let i = 0; i < poa_deptos.length; i++) {
                fuente11 += parseFloat(poa_deptos[i].fuente11);
                fuente12 += parseFloat(poa_deptos[i].fuente12);
                fuente12B+= parseFloat(poa_deptos[i].fuente12B);

          }
          return res.status(200).send(
            {
            fuente11,
            fuente12,
            fuente12B,
            fuente11_base:parseFloat(poa.fuente11),
            fuente12_base:parseFloat(poa.fuente12),
            fuente12B_base:parseFloat(poa.fuente12B),
            fuente11_restante:parseFloat(poa.fuente11) - fuente11,
            fuente12_restante:parseFloat(poa.fuente12) - fuente12,
            fuente12B_restante:parseFloat(poa.fuente12B) - fuente12B
          }
          );
    } catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}

const get_status_depto = async (req, res) => {
    try{
        const Poa_Ue = await db.poa.findOne({
            where:{
                idUE:req.body.idUnidadEjecutora,
                anio:req.body.anio
            }
        })
        if(!Poa_Ue){
            return res.status(404).send({message:'no existe poa para esa Ue en ese año'});
        }
        const Poa_depto = await db.poa_depto.findOne({
            where:{
                idPoaUE:Poa_Ue.id,
                idDepto:req.body.idDepto
            }
        })
        if(!Poa_depto){
            return res.status(404).send({message:'no existe poa para ese departamento en ese año para esa ue'});
        }
        return res.status(200).send({res:true,
        poa:Poa_depto});

    }catch(e){
        return res.status(500).send({message:'Error en el server : ' + e});
    }
}

module.exports = {
    new_ue_presupuesto,
    update_ue_presupuesto,
    delete_ue_presupuesto,
    get_all_ue_presupuesto,
    get_one_ue_presupuesto,
    get_status_ue_presupuesto,
    get_status_depto,
    set_habilitado,
    set_prederminado
}