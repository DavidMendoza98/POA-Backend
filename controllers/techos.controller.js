const db = require("../models");

// techos de las unidades ejecutoras
const get_all_techos_by_idpoa = async (req,res)=>{
    try{
        if(!req.params.idPoa){
            return res.status(400).send('no se envio el idPoa');
        }
        const all_techos = await db.techo_ue.findAll({
            where:{
                isDelete:false,
                idPoa:req.params.idPoa
            },
            include:[{model:db.fuente},{model:db.grupogasto}]
        })
        return res.status(200).send(all_techos);
    }catch(err){
        return res.status(500).send('Server error: ',err);
    }
}

const delete_techo_ue = async (req,res)=>{
    
    try{
        if(!req.body.id){
            return res.status(400).send({"message":"No se envió el id del techo"});
        }
        const techo = await db.techo_ue.findByPk(req.body.id);
        if(!techo){
            return res.status(404).send({"message":"No se encuentra registrado ese techo"});
        }
        await db.techo_ue.update(
            {
                isDelete: true
            },
            {
                where: {
                    id: req.body.id
                }
            }
        )

        return res.status(200).send({"message":"Techo eliminado correctamente"});
    }catch(err){
        return res.status(500).send({"message":'Error al eliminar el techo presupuestario de la unidad ejecutora ',"error":err});
    }
}


const get_techos_ue_for_create_techo_depto = async (req,res) => {
    try {
        if(!req.params.idPoa){
            return res.status(400).send({"message":"No ha sido posible obtener los datos"})
        }

        const all_techos = await db.techo_ue.findAll({
            where:{
                idPoa:req.params.idPoa,
                isDelete: false
            }, include:[{model:db.fuente},{model:db.grupogasto}]
        })
        // variable que almacena los techos y los presupuestos
        const result = [];
        for (const i of all_techos) {
            // obtienes los techos_deptos que ya se asignaron al techo de la ue
            let techos_deptos = await db.techo_depto.findAll({
                where:{
                    idTechoUE:i.id,
                    isDelete:false
                }, include: [{model:db.depto}]
            })
            // calcula cuanto dinero se ha asignado ya
            let asignado = 0.0;
            techos_deptos.forEach(item => {
                asignado = asignado + parseFloat(item.monto);
            });
            // calcula cuanto dinero hay disponible
            const disponible = parseFloat(i.monto) - asignado;

            // % usado del presupesto
            const porcentaje =  Math.round((asignado * 100)/ parseFloat(i.monto));

            // agrega un objeto que será utilizado para ser enviado al front
            result.push({
                "techo_ue":i,
                "techos_deptos":techos_deptos,
                "asignado":asignado,
                "disponible":disponible,
                "porcentaje":porcentaje
            })
        }
        return res.status(200).send(result)

    } catch (error) {
        return res.status(500).send({"message":'Error al eliminar el techo presupuestario de la unidad ejecutora ',"error":error});
    }
}
// techos de los departamentos
const delete_techo_depto = async (req,res)=>{
    
    try{
        if(!req.body.id){
            return res.status(400).send({"message":"No se envió el id del techo"});
        }
        const techo = await db.techo_depto.findByPk(req.body.id);
        if(!techo){
            return res.status(404).send({"message":"No se encuentra registrado ese techo"});
        }
        await db.techo_depto.update(
            {
                isDelete: true
            },
            {
                where: {
                    id: req.body.id
                }
            }
        )

        return res.status(200).send({"message":"Techo eliminado correctamente"});
    }catch(err){
        return res.status(500).send({"message":'Error al eliminar el techo presupuestario del departamento ',"error":err});
    }
}

const new_techo_depto = async (req,res) =>{
    try {
        if(!req.body.techo){
            return res.status(400).send({"message":"No se envió el  techo"});
        }
        if(!req.body.idDepto){
            return res.status(400).send({"message":"No se envió el id del techo del departamento"});
        }
        if(!req.body.idPoaUE){
            return res.status(400).send({"message":"No se envió el id del poa de la unidad"});
        }
        const poa = await db.poa.findByPk(req.body.idPoaUE);
        if(!poa){
            return res.status(404).send({"message":"No se encuentra el poa de la unidad ejecutora"});
        }
        const poaDepto = await db.poa_depto.findOne({
            where:{
                isDelete:false,
                idDepto:req.body.idDepto,
                idPoaUE:req.body.idPoaUE
            }
        });
        if(!poaDepto){
            return res.status(404).send({"message":"No se encuentra el poa del departamento"});
        }

        const techo = JSON.parse(req.body.techo);
        
        await db.techo_depto.create({
            monto:techo.monto,
            idUE:poa.idUE,
            idPoa:poa.id,
            idDepto:req.body.idDepto,
            idPoaDepto:poaDepto.id,
            idTechoUE:techo.idTecho,
            idGrupo:techo.grupo.id
        })
        return res.status(200).send({"message":"Creado correctamente el techo del departamento"});
    } catch (error) {
        console.log(error)
        return res.status(500).send({"message":'Error al crear techo de este departamento ',"error":error});
    }
}
const get_techos_depto_by_poa_y_depto = async (req,res)=>{
    try {
        if(!req.params.idPoa){
            return res.status(400).send({"message":"No ha sido posible obtener los datos de la planificacion"})
        }
        if(!req.params.idDepto){
            return res.status(400).send({"message":"No ha sido posible obtener los datos del departamento"})
        }
        const poa_depto = await db.poa_depto.findOne({
            where:{
                isDelete:false,
                idPoaUE:req.params.idPoa,
                idDepto:req.params.idDepto
            }
        })
        if(!poa_depto){
            return res.status(400).send({"message":"No ha sido posible obtener los datos del presupuesto del departamento"})
        }
        const techos_depto = await db.techo_depto.findAll({
            where:{
                idPoaDepto:poa_depto.id,
                isDelete:false
            }, include:[{model:db.grupogasto},{model:db.techo_ue,include:[{model:db.fuente}]}]
        })
        if(!techos_depto){
            return res.status(400).send({"message":"No ha sido posible obtener los datos de los techos presupuestarios del departamento"})
        }
        return res.status(200).send(techos_depto)
    } catch (error) {
        return res.status(500).send({"message":'Error al obtener los datos de techos de este departamento desde el servidor ',"error":error});
    }
}

const get_techo_by_id_objeto_gasto = async (req,res)=>{

}
module.exports = {
    get_all_techos_by_idpoa,
    delete_techo_ue,
    get_techos_ue_for_create_techo_depto,
    get_techos_depto_by_poa_y_depto,
    delete_techo_depto,
    new_techo_depto,
    get_techo_by_id_objeto_gasto
}