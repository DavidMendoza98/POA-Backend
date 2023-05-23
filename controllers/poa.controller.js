const db = require("../models/");
const jwt = require("jsonwebtoken");

//Controlador para crear un nuevo POA
const new_POA = async (req, res) => {
    try {
        const unidad = await db.ue.findOne({ where: { id: req.body.idUE } })
        if (!unidad) {
            return res.status(400).json({ message: 'POA incorrecto' });
        }
        const insti = await db.institucion.findOne({ where: { id: req.body.idInstitucion } })
        if (!insti) {
            return res.status(400).json({ message: 'POA incorrecto' });
        }
        await db.poa.create({
            name: req.body.name,
            anio: req.body.anio,
            fuente11: req.body.fuente11,
            fuente12: req.body.fuente12,
            fuente12B: req.body.fuente12B,
            idUE: unidad.id,
            idInstitucion: insti.id
        });
        return res.status(200).json({ status: "Ok" });
    } catch (error) {
        console.log("error: " + error);
        return res.status(500).json({ status: "error", error: error });
    }
}
const new_poa_depto = async (req, res) => {
    try {
        const poa = await db.poa.findOne({ where: { id: req.body.idPoa } })
        if (!poa) {
            return res.status(400).json({ message: 'No se encuentra el Poa' });
        }
        await db.poa_depto.create({
            fuente11: req.body.fuente11,
            fuente12: req.body.fuente12,
            fuente12B: req.body.fuente12B,
            idPoaUE: poa.id,
            idDepto: req.body.id
        });
        return res.status(200).json({ status: "Ok" });
    } catch (error) {
        console.log("error: " + error);
        return res.status(500).json({ status: "error", error: error });
    }
}

//Actualizar POA
const updatePOA = async (req, res) => {
    try {
        const POA = await db.poa.findByPk(req.body.id);
        if (!POA) {
            return res.status(404).send({ message: 'POA not found' })
        }
        await db.poa.update({ 
            name: req.body.name, 
            anio: req.body.anio, 
            fuente11: req.body.fuente11, 
            fuente12: req.body.fuente12, 
            fuente12B: req.body.fuente12B
         }, { where: { id: req.body.id } })
        return res.status(200).send({ message: "ok" });
    } catch (error) {
        res.status(500).json({
            message: 'error al actualizar ' + error
        })
    }
}
const updatePoaDepto = async (req, res) => {
    try {
        const POA = await db.poa_depto.findByPk(req.body.id);
        if (!POA) {
            return res.status(404).send({ message: 'POA not found' })
        }
        await db.poa_depto.update({ 
            fuente11: req.body.fuente11, 
            fuente12: req.body.fuente12, 
            fuente12B: req.body.fuente12B
         }, { where: { id: req.body.id } })
        return res.status(200).send({ message: "ok" });
    } catch (error) {
        res.status(500).json({
            message: 'error al actualizar ' + error
        })
    }
}


//Deshabilitar POA

const disable_POA = async (req, res) => {
    try {
        const temporally = await db.poa.update({
            isActive: false
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "POA is disable"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: "Error: POA can't be disable " + error.message
        });
    }
}
const delete_POA = async (req, res) => {
    try {
        const temporally = await db.poa.update({
            isDelete: true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "POA is deleted"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: "Error: POA can't be deleted " + error.message
        });
    }
}

const active_POA = async (req, res) => {
    try {
        const temporally = await db.poa.update({
            isActive: true
        }, {
            where: {
                id: req.body.id
            }
        });
        if (temporally) {
            res.status(200).send({
                message: "POA is disable"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            message: "Error: POA can't be disable " + error.message
        });
    }
}

//Obtener todos los POA
const get_POA = async (req, res) => {
    try {
        const all_poa = await db.poa.findAll({
            where: { 
                     isDelete: false,
                     idUE:1
                   },
            include: [{
            }, { model: db.ue }],
        });
        if (!all_poa) {
            return res.status(401).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_poa);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

// Obtener POA por depto
const get_all_poa_by_idDepto = async (req, res) => {
    try {
        const all_poas = await db.poa.findAll(
            {
                where: {
                    isDelete: false,
                    idUE: 1
                }
            }
        );
        if (!all_poas) {
            return res.status(401).send({ message: 'No hay ningún elemento' });
        }
        return res.status(200).json(all_poas);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}
const get_poa_depto_by = async (req, res) => {
    try {
        const poa_depto = await db.poa_depto.findOne(
            {
                where: {
                    isDelete: false,
                    id: req.params.id
                }

            }
        );
        if (!poa_depto) {
            return res.status(404).send({ message: 'No hay ningún elemento' });
        }
        const poa_ue = await db.poa.findByPk(poa_depto.idPoaUE);

        if (!poa_ue) {
            return res.status(404).send({ message: 'No hay ningún elemento' });
        }
        return res.status(200).json({poa_depto,poa_ue});
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const misPOAs = async (req, res) => {
    try {
        const depto = await db.depto.findByPk(req.params.idDepto);
        if (!depto) {
            return res.status(404).send({ message: 'No hay departamento' });
        }

        poas = await db.poa_depto.findAll(
            {
                where:{isDelete: false, idDepto: depto.id},
                include: [
                    {
                      model: db.depto,
                    },
                    {
                      model: db.poa,
                      where: { isActive: 1 }
                    }
                  ]
            }
        )
        return res.status(200).json(poas);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


// Obetener POA por Unidad Ejecutora
const allPoasbyUE = async (req, res) => {
    try {
        if(!req.params.token){
            res.status(400).send({message:'falta envio de token de usuario'})
        }
        // const sesion = await db.sesion.findOne(
        //     {where:{
        //         token:req.params.token,
        //         isActive:true,
        //         isDelete:false
        //     }}
        // )
        // if(!sesion){
        //     res.status(401).send({message:'Acceso denegado, debe iniciar sesión'}) 
        // }
        const decodedToken = jwt.decode(req.params.token);
        console.log("TOkeeeeeennnnn::::::",decodedToken);

        const all_poas = await db.poa.findAll(
            {
                where: {
                    isDelete: false,
                    idUE: decodedToken.idUE
                },
                include: db.ue
            }
        );
        if (!all_poas) {
            return res.status(404).send({ message: 'No hay ningún elemento' });
        }
        return res.status(200).json(all_poas);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

//Obtener POA por ID
const get_poa = async (req, res) => {
    try {
        const poa = await db.poa.findOne({ where: { id: req.params.id } })
        if (!poa) {
            return res.status(404).json({ message: 'No se encuentra esa dimension' });
        }
        return res.status(200).json({ status: "Ok", poa });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

//Filtrar Actividades por POA y obtener tareas y actividades para seguimiento
const get_all_actividades_by_idPoa = async (req, res) => {
    try {
        const all_actividad = await db.actividad.findAll(
            {
                where: {
                    isDelete: false,
                    idPoa: req.params.idPoa
                },
                include: [{                                  
                    model: db.tarea},{
                    model: db.indicadoresPoa
                }], order: [
                    ['createdAt', 'DESC']]
            })
        if (!all_actividad) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividad);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}
function compararDeptos(depto1, depto2) {
    return depto1.id !== depto2.id;
}
get_all_poas_depto_by_idPoaUE = async (req,res)=>{
    try{
        // validaciones
        if(!req.params.idPoa) return res.status(400).json({message:'id del POA no enviado'});

        const poa = await db.poa.findByPk(req.params.idPoa);
        if(!poa) return res.status(404).json({message:'Poa no encontrado'});

        //obtener todos los poas de departamentos para esa Unidad Ejecutora
        const all_poa_deptos = await db.poa_depto.findAll({
            where:{
                isDelete:false,
                idPoaUE:req.params.idPoa
            },
            include: [db.depto,db.poa]
        })
        //dividir los departamentos con planificacion con los que no
        const deptos_con_poa = all_poa_deptos.map(item=>item.depto);
        let fuente11_asignado = 0;
        let fuente12_asignado = 0;
        let fuente12B_asignado = 0;
        for (let i = 0; i < all_poa_deptos.length; i++) {
            fuente11_asignado += parseFloat(all_poa_deptos[i].fuente11);
            fuente12_asignado += parseFloat(all_poa_deptos[i].fuente12);
            fuente12B_asignado += parseFloat(all_poa_deptos[i].fuente12B);
          }
        const deptos = await db.depto.findAll({
            where:{
                isDelete:false,
                idUnidadEjecutora:poa.idUE
            }
        });
        const deptos_sin_poa =  deptos.filter(item => deptos_con_poa.every(depto=>compararDeptos(item, depto)))
          

        return res.status(200).send({
            Poa:poa,
            presupuesto:{fuente11_asignado, fuente12_asignado, fuente12B_asignado,
                        'fuente11_disponible':poa.fuente11 - fuente11_asignado,
                        'fuente12_disponible':poa.fuente12 - fuente12_asignado,
                        'fuente12B_disponible':poa.fuente12B - fuente12B_asignado},
            all_poa_deptos,
            deptos_con_poa,
            deptos_sin_poa
        });


    }catch (error){
        console.log(error)
        return res.status(500).send(error);

    }
}


module.exports = {
    allPoasbyUE,
    new_POA,
    updatePOA,
    get_POA,
    disable_POA,
    get_all_poa_by_idDepto,
    get_poa,
    active_POA,
    misPOAs,
    get_all_actividades_by_idPoa,
    get_all_poas_depto_by_idPoaUE,
    delete_POA,
    new_poa_depto,
    updatePoaDepto,
    get_poa_depto_by
}