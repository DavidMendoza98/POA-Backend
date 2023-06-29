const db = require("../models");
const { Op } = require("sequelize");
// techos de las unidades ejecutoras
const get_all_techos_by_idpoa = async (req, res) => {
    try {
        if (!req.params.idPoa) {
            return res.status(400).send('no se envio el idPoa');
        }
        const all_techos = await db.techo_ue.findAll({
            where: {
                isDelete: false,
                idPoa: req.params.idPoa
            },
            include: [{ model: db.fuente }, { model: db.grupogasto }]
        })
        return res.status(200).send(all_techos);
    } catch (err) {
        return res.status(500).send('Server error: ', err);
    }
}

const delete_techo_ue = async (req, res) => {

    try {
        if (!req.body.id) {
            return res.status(400).send({ "message": "No se envió el id del techo" });
        }
        const techo = await db.techo_ue.findByPk(req.body.id);
        if (!techo) {
            return res.status(404).send({ "message": "No se encuentra registrado ese techo" });
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

        return res.status(200).send({ "message": "Techo eliminado correctamente" });
    } catch (err) {
        return res.status(500).send({ "message": 'Error al eliminar el techo presupuestario de la unidad ejecutora ', "error": err });
    }
}


const get_techos_ue_for_create_techo_depto = async (req, res) => {
    try {
        if (!req.params.idPoa) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos" })
        }

        const all_techos = await db.techo_ue.findAll({
            where: {
                idPoa: req.params.idPoa,
                isDelete: false
            }, include: [{ model: db.fuente }, { model: db.grupogasto }]
        })
        // variable que almacena los techos y los presupuestos
        const result = [];
        for (const i of all_techos) {
            // obtienes los techos_deptos que ya se asignaron al techo de la ue
            let techos_deptos = await db.techo_depto.findAll({
                where: {
                    idTechoUE: i.id,
                    isDelete: false
                }, include: [{ model: db.depto }]
            })
            // calcula cuanto dinero se ha asignado ya
            let asignado = 0.0;
            techos_deptos.forEach(item => {
                asignado = asignado + parseFloat(item.monto);
            });
            // calcula cuanto dinero hay disponible
            const disponible = parseFloat(i.monto) - asignado;

            // % usado del presupesto
            const porcentaje = Math.round((asignado * 100) / parseFloat(i.monto));

            // agrega un objeto que será utilizado para ser enviado al front
            result.push({
                "techo_ue": i,
                "techos_deptos": techos_deptos,
                "asignado": asignado,
                "disponible": disponible,
                "porcentaje": porcentaje
            })
        }
        return res.status(200).send(result)

    } catch (error) {
        return res.status(500).send({ "message": 'Error al eliminar el techo presupuestario de la unidad ejecutora ', "error": error });
    }
}
const get_monto_min_for_update_techo_ue = async (req,res)=>{
    try {
        if (!req.params.idTechoUE) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos" })
        }
        const techo = await db.techo_ue.findByPk(req.params.idTechoUE);
        if (!techo) {
            return res.status(404).send({ "message": "No se encuentra registrado ese techo" });
        }
        let montoMin = await db.techo_depto.sum('monto',{
            where:{
                isDelete:false,
                idTechoUE: req.params.idTechoUE
            }
        })
        if(montoMin === null){
            montoMin = 0;
        }
        return res.status(200).send({'min':montoMin})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": 'Error al obtener el monto máximo disponible para ese techo presupuestario '});
    }
}
const get_monto_max_for_update_techo_ue = async (req,res)=>{
    try {
        if (!req.params.idTechoUE) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos" })
        }
        const techo = await db.techo_ue.findByPk(req.params.idTechoUE);
        if (!techo) {
            return res.status(404).send({ "message": "No se encuentra registrado ese techo" });
        }
        let montoMax = await db.techo_depto.sum('monto',{
            where:{
                isDelete:false,
                idTechoUE: req.params.idTechoUE
            }
        })
        if(montoMax === null){
            montoMax = 0;
        }
        montoMax = techo.monto - montoMax
        return res.status(200).send({'max':montoMax})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": 'Error al obtener el monto máximo disponible para ese techo presupuestario '});
    }
}
// techos de los departamentos
const delete_techo_depto = async (req, res) => {

    try {
        if (!req.body.id) {
            return res.status(400).send({ "message": "No se envió el id del techo" });
        }
        const techo = await db.techo_depto.findByPk(req.body.id);
        if (!techo) {
            return res.status(404).send({ "message": "No se encuentra registrado ese techo" });
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

        return res.status(200).send({ "message": "Techo eliminado correctamente" });
    } catch (err) {
        return res.status(500).send({ "message": 'Error al eliminar el techo presupuestario del departamento ', "error": err });
    }
}

const new_techo_depto = async (req, res) => {
    try {
        if (!req.body.techo) {
            return res.status(400).send({ "message": "No se envió el  techo" });
        }
        if (!req.body.idDepto) {
            return res.status(400).send({ "message": "No se envió el id del techo del departamento" });
        }
        if (!req.body.idPoaUE) {
            return res.status(400).send({ "message": "No se envió el id del poa de la unidad" });
        }
        const poa = await db.poa.findByPk(req.body.idPoaUE);
        if (!poa) {
            return res.status(404).send({ "message": "No se encuentra el poa de la unidad ejecutora" });
        }
        const poaDepto = await db.poa_depto.findOne({
            where: {
                isDelete: false,
                idDepto: req.body.idDepto,
                idPoaUE: req.body.idPoaUE
            }
        });
        if (!poaDepto) {
            return res.status(404).send({ "message": "No se encuentra el poa del departamento" });
        }

        const techo = JSON.parse(req.body.techo);

        await db.techo_depto.create({
            monto: techo.monto,
            idUE: poa.idUE,
            idPoa: poa.id,
            idDepto: req.body.idDepto,
            idPoaDepto: poaDepto.id,
            idTechoUE: techo.idTecho,
            idGrupo: techo.grupo.id
        })
        return res.status(200).send({ "message": "Creado correctamente el techo del departamento" });
    } catch (error) {
        return res.status(500).send({ "message": 'Error al crear techo de este departamento ', "error": error });
    }
}
const update_techo_depto = async (req, res) => {
    try {
        if (!req.body.idTechoDepto) {
            return res.status(400).send({ "message": "No se envió el id del techo de departamento" });
        }
        if (!req.body.monto) {
            return res.status(400).send({ "message": "No se envió el monto actualizado" });
        }

        await db.techo_depto.update({
                monto: req.body.monto
            }, {
                where: {
                    id: req.body.idTechoDepto
                }
            }
        )
        return res.status(200).send({'message':'Techo de departamento actualizado con éxito'})
    } catch (error) {
        return res.status(500).send({ "message": 'Error al crear techo de este departamento ' });
    }
}
const get_techos_depto_by_poa_y_depto = async (req, res) => {
    try {
        if (!req.params.idPoa) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del poa de unidad" })
        }
        if (!req.params.idDepto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del departamento" })
        }
        const poa_depto = await db.poa_depto.findOne({
            where: {
                isDelete: false,
                idPoaUE: req.params.idPoa,
                idDepto: req.params.idDepto
            }
        })
        if (!poa_depto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del presupuesto del departamento" })
        }
        const techos_depto = await db.techo_depto.findAll({
            where: {
                idPoaDepto: poa_depto.id,
                isDelete: false
            }, include: [{ model: db.grupogasto }, { model: db.techo_ue, include: [{ model: db.fuente }] }]
        })
        if (!techos_depto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos de los techos presupuestarios del departamento" })
        }
        return res.status(200).send(techos_depto)
    } catch (error) {
        return res.status(500).send({ "message": 'Error al obtener los datos de techos de este departamento desde el servidor ', "error": error });
    }
}

const get_techo_by_id_objeto_gasto = async (req, res) => {
    try {
        // validaciones
        if (!req.params.idObjetoGasto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del objeto del gasto para obtener techo presupuestario" })
        }
        if (!req.params.idActividad) {
            return res.status(400).send({ "message": "No ha sido posible obtener el id de la actividad"});
        }
        const actividad = await db.actividad.findByPk(req.params.idActividad);

        if (!actividad) {
            return res.status(400).send({ "message": "La actividad no se encuentra en la base de datos" });
        }

        // obtener el grupo de gasto para buscar los techos disponibles y calcular la cantidad disponible para cada techo
        const objetogasto = await db.objetogasto.findByPk(req.params.idObjetoGasto);
        if (!objetogasto) {
            return res.status(404).send({ "message": "Ese Objeto gasto no se encuentra en la base de datos" });
        }

        // buscar los techos disponibles
        const techos_disponibles = await db.techo_depto.findAll({
            where:{
                isDelete:false,
                idPoaDepto:actividad.idPoaDepto,
                idGrupo:objetogasto.idgrupo
            }, include:[{model:db.techo_ue, include:[{model:db.fuente}]}]
        })

        let idActividades = await db.actividad.findAll({
            atributes:['id'],
            where:{
                isDelete:false,
                idPoaDepto: actividad.idPoaDepto
            }
        })

        idActividades = idActividades.map(item => item.id);
        let idTareas = await db.tarea.findAll({
            atributes:['id'],
            where:{
                isDelete:false,
                idActividad: {[Op.in]:  idActividades}
            }
        })

        idTareas = idTareas.map(item => item.id);

        const result = []
        for (const i of techos_disponibles) {
            let sumaPresupuestos = await db.presupuesto.sum('total',{
                where:{
                    isDelete:false,
                    idgrupo: i.idGrupo,
                    idfuente: i.techo_ue.fuente.id,
                    idtarea: {[Op.in]:  idTareas}
                }
            })
            result.push({
                'techo':i,
                'disponible': i.monto - sumaPresupuestos,
            })
        }

        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send({ "message": 'Error al obtener los datos de techos para ese objeto del gasto desde el servidor ', "error": error });
    }
}
const get_monto_min_for_update_techo_depto = async (req,res)=>{
    try {
        // validaciones
        if (!req.params.idTechoDepto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del techo" })
        }
        const techo = await db.techo_depto.findByPk(req.params.idTechoDepto);
        if (!techo) {
            return res.status(404).send({ "message": "No se encuentra registrado ese techo" });
        }

        if (!req.params.idFuente) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos de la fuente" })
        }
        const fuente = await db.fuente.findByPk(req.params.idFuente);
        if (!fuente) {
            return res.status(404).send({ "message": "No se encuentra registrado esa fuente" });
        }

        if (!req.params.idGrupo) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos del grupogasto" })
        }
        const grupogasto = await db.grupogasto.findByPk(req.params.idGrupo);
        if (!grupogasto) {
            return res.status(404).send({ "message": "No se encuentra registrado ese grupogasto" });
        }

        // obtener las actividades
        let idActividades = await db.actividad.findAll({
            atributes:['id'],
            where:{
                isDelete:false,
                idPoaDepto: techo.idPoaDepto
            }
        })

        idActividades = idActividades.map(item => item.id);

        // obtener las tareas
        let idTareas = await db.tarea.findAll({
            atributes:['id'],
            where:{
                isDelete:false,
                idActividad: {[Op.in]:  idActividades}
            }
        })

        idTareas = idTareas.map(item => item.id);

        // sumar los presupuestos de las tareas
        let montoMin = await db.presupuesto.sum('total',{
            where:{
                isDelete:false,
                idtarea: {[Op.in]:  idTareas},
                idfuente:fuente.id,
                idgrupo:grupogasto.id
            }
        })
        if(montoMin === null){
            montoMin = 0;
        }
        return res.status(200).send({'min':montoMin})
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({ "message": 'Error al obtener el monto máximo disponible para ese techo presupuestario '});
    }
}
const get_techos_depto_by_idPoaDepto = async (req, res) => {
    try {
        if (!req.params.idPoaDepto) {
            return res.status(400).send({ "message": "No ha sido posible obtener los datos de la planificacion del departamento" })
        }
        const poa_depto = await db.poa_depto.findByPk(req.params.idPoaDepto);
        if (!poa_depto) {
            return res.status(404).send({ "message": "La planificación de ese departamento no se encuentra en la base de datos" })
        }

        const all_techos = await db.techo_depto.findAll({
            where: {
                idPoaDepto: req.params.idPoaDepto,
                isDelete: false
            }, include: [{ model: db.techo_ue, include:db.fuente }, { model: db.grupogasto }]
        })
        // variable que almacena los techos y los presupuestos
        const result = [];
        for (const i of all_techos) {
            // obtener las actividades
            let idActividades = await db.actividad.findAll({
                atributes:['id'],
                where:{
                    isDelete:false,
                    idPoaDepto: i.idPoaDepto
                }
            })

            idActividades = idActividades.map(item => item.id);

            // obtener las tareas
            let idTareas = await db.tarea.findAll({
                atributes:['id'],
                where:{
                    isDelete:false,
                    idActividad: {[Op.in]:  idActividades}
                }
            })

            idTareas = idTareas.map(item => item.id);

            // sumar los presupuestos de las tareas
            let asignado = await db.presupuesto.sum('total',{
                where:{
                    isDelete:false,
                    idtarea: {[Op.in]:  idTareas},
                    idfuente:i.techo_ue.fuente.id,
                    idgrupo:i.grupogasto.id
                }
            })
            if(asignado === null){
                asignado = 0;
            } 

            // llevar los presupuestos 
            const presupuestos = await db.presupuesto.findAll({
                where:{
                    isDelete:false,
                    idtarea: {[Op.in]:  idTareas},
                    idfuente:i.techo_ue.fuente.id,
                    idgrupo:i.grupogasto.id
                }, include:[{model:db.tarea, include: db.actividad},{model:db.fuente},{model:db.objetogasto},{model:db.grupogasto}]
            })
            // calcula cuanto dinero hay disponible
            const disponible = parseFloat(i.monto) - asignado;

            // % usado del presupesto
            const porcentaje = Math.round((asignado * 100) / parseFloat(i.monto));

            // agrega un objeto que será utilizado para ser enviado al front
            result.push({
                "techo": i,
                "asignado": asignado,
                "disponible": disponible,
                "porcentaje": porcentaje,
                "presupuestos":presupuestos
            })
        }
        return res.status(200).send(result)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ "message": 'Error al eliminar el techo presupuestario de la unidad ejecutora ', "error": error });
    }
}
module.exports = {
    // techo ue
    get_all_techos_by_idpoa,
    delete_techo_ue,
    get_techos_ue_for_create_techo_depto,
    get_monto_min_for_update_techo_ue,
    get_monto_max_for_update_techo_ue,
    //techo depto
    get_techos_depto_by_poa_y_depto,
    delete_techo_depto,
    new_techo_depto,
    update_techo_depto,
    get_techo_by_id_objeto_gasto,
    get_monto_min_for_update_techo_depto,
    get_techos_depto_by_idPoaDepto
}