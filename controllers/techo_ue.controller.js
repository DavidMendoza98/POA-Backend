const db = require("../models/");

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

module.exports = {
    get_all_techos_by_idpoa
}