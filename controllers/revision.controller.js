const db = require("../models/");
const { Op , sequelize} = require("sequelize");
const { presupuesto, resultado } = require("../models/");


const getPoasForRevision = async(req,res) => {
    try{
        let usuario = await db.user.findOne({where:{id:req.usuario.idUsuario}});
        let empleado = await db.empleado.findOne(
            {
                where:{
                    id:usuario.idEmpleado
                }
            }
        )
        let unidadEjecutora = await db.ue.findOne(
            {
                where: { id: empleado.idUnidadEjecutora}
            }
        )

        let poas = await db.poa.findAll(
            {
                where:{
                    isDelete: false,
                    isActive:true,
                    idUE:unidadEjecutora.id
                }
            }
        )

        return res.status(200).send(poas);
    } catch (e) {
        return res.status(500).send(e);
    }
}
const getPoaDeptosForRevision = async(req,res) => {
    try{
        if(!req.params.idPoa){
            return res.status(400).send({'message':'id del Poa no enviado'});
        }


        const poaDeptos = await db.poa_depto.findAll(
            {
                where:{
                    isDelete: false,
                    idPoaUE:req.params.idPoa
                },include:[{ model: db.depto }]
            }
        )

        const resultado = []
        for (const i of poaDeptos) {
            // obtener el dinero que se le asigno a ese departamento
            let presupuesto = parseFloat(i.fuente11) + parseFloat( i.fuente12) + parseFloat( i.fuente12B);
            
            // obtener todas las actividades
            let actividadesPoaDepto = await db.actividad.findAll(
                {attributes: ['id'],
                where: {
                    idPoaDepto : i.id,
                    estado: {[Op.or]: ['REVISION','APROBADO','RECHAZADO'] }
                }}
                );
            let count = await db.actividad.count({ where: {idPoaDepto : i.id,estado: {[Op.or]: ['REVISION','APROBADO','RECHAZADO'] }}});
            let porcentaje = 0;
            let planificado = 0;
            let idTareas = [];
            let presupuestos = 0;
            if(count > 0){
                const idActividades = actividadesPoaDepto.map(item => item.id);
                

                const tareas = await db.tarea.findAll({attributes: ['id'],where:{isDelete:false, idActividad: {[Op.or]:  idActividades}}})
                
                // esta variable acumulara el dinero que se ha planificado
                if(tareas.length > 0){
                    idTareas = tareas.map(item => item.id);
                    presupuestos = await db.presupuesto.findAll({
                        attributes: ['total'],
                        where:{
                                isDelete : false,
                                idtarea: {[Op.or]:  idTareas}
                        }
                    });
                    planificado  = presupuestos.reduce((acumulado, valorActual) => {
                        return acumulado + parseFloat(valorActual.total);
                    }, 0);
                    porcentaje = (planificado * 100) / presupuesto;
                }
            } 
            resultado.push(
                {'poaDepto':i, 'cantActividades':count, 'presupuesto':presupuesto,'planificado':planificado,'porcentaje': Math.round(porcentaje)}
            )
            count = 0;
            actividadesPoaDepto = [];
            idActividades = [];
            tareas = [];
            idTareas = [];
            presupuesto = 0;
            presupuestos = [];
            planificado = 0


        }

        return res.status(200).send(resultado);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

const getActividadesForRevisionByIdPoaDepto = async (req,res) =>{
    if(!req.params.idPoaDepto){
        return res.status(400).send({'message':'Error, id del Poa del departamento no enviado'});
    }

    try{
        const actividades = await db.actividad.findAll(
            {
                where:{
                    isDelete:false,
                    idPoaDepto : req.params.idPoaDepto,
                    estado: {[Op.or]: ['REVISION','APROBADO','RECHAZADO','REFORMULACION'] }
                }
            }
        )
        if(!actividades){
            return res.status(404).send({'message':'No existen actividades para ese poaDepto'});
        }

        return res.status(200).send(actividades)

    }catch(error){

    }
}

const getDataofActividadForRevision = async(req,res) =>{
    if(!req.params.idActividad){
        return res.status(400).send({'message':'Error, id de la Actividad no enviado'});
    }

    try{
            const TareasConPresupuestoArray = []
            const tareasSinPresupuesto = await db.tarea.findAll({
                where:{
                    isDelete : false,
                    idActividad : req.params.idActividad,
                    isPresupuesto:false
                }
            })

            const TareasConPresupuesto = await db.tarea.findAll({
                attributes:['id'],
                where:{
                    isDelete : false,
                    idActividad : req.params.idActividad,
                    isPresupuesto:true

                }
            })

            const idsTareasConPresupuesto = TareasConPresupuesto.map(item => item.id);

            for (const j of idsTareasConPresupuesto) {
                const presupuesto = await db.presupuesto.findAll({
                    where:{
                        isDelete : false,
                        idtarea : j
                    },include:[{model:db.tarea},{model:db.grupogasto},{model: db.objetogasto},{model:db.unidadmedida},{model:db.fuente}]
                })

                TareasConPresupuestoArray.push(presupuesto);
                
            }

            const indicadores = await db.indicadoresPoa.findAll({
                where:{
                    isDelete:false,
                    idActividad : req.params.idActividad
                }
            })
            const planificacion = []
            for (const k of indicadores) {
                planificacionItem = await db.planificacion.findAll({
                    where:{
                        isDelete:false,
                        idActividad:req.params.idActividad,
                        idIndicador : k.id
                    },
                    include:[{model:db.mes}],
                    order: [['idMes', 'ASC']]
                })

                planificacion.push({'indicador':k,'planificaciones':planificacionItem})
                
            }

            
        return res.status(200).send({
            'tareas_sin_presupuesto':tareasSinPresupuesto,
            'tareas_con_presupuesto':TareasConPresupuestoArray,
            'indicadores':indicadores,
            'planificaciones':planificacion
        });
    }catch (error){
        console.log(error);
        return res.status(500).send('Server Error: ');
    }
}


const setAprobada = async (req,res) =>{
    try{
        revision = await db.revision.findOne(
            {
                where:{
                    id: req.params.id
                }
            }
        )
        if(!revision) res.status(404).send({'message':'Revision no encontrada'})

        await db.revision.update({
            corregido : 1
        },{where:{
            id:revision.id
        }})
        return res.status(200).send({'message':'Actualizado con éxito'})

    }catch{

    }
    
}
const allRevision_by_idActividad = async (req, res) => {
    try {
        const allRevision = await db.revision.findAll({
            where: {
                isDelete: false,
                idActividad : req.params.idActividad
            }
        })
        const result = []
        for (const i of allRevision) {
            let foraneo;
            if(i.tipo === 'TAREA'){
                foraneo = await db.tarea.findOne({where:{id:i.idForaneo}});
            }
            if(i.tipo === 'INDICADOR'){
                foraneo =  await db.indicadoresPoa.findOne({where:{id:i.idForaneo}});
            }
            if(i.tipo === 'PLANIFICACION'){
                foraneo =  await db.planificacion.findOne({where:{id:i.idForaneo}});
            }

            result.push(
                {
                    'revision':i,
                    'foraneo':foraneo
                }
            )
        }
        return res.status(200).json(result);
    } catch (error) {
        res.status(500).json({
            message: 'error en la petición' + error
        })
    }
};
const actividadesByEstado = async(req,res) => {
    try{
      //const actividad = await db.actividad.findByPk(req.body.idActividad);
      const act_formulacion =  await db.actividad.findAll({
        where: {
            isDelete: false,
            idPoa: req.params.idPoa,
            estado:'FORMULACION'
            },
            })
        const act_reformulacion =  await db.actividad.findAll({
                where: {
                    isDelete: false,
                    idPoa: req.params.idPoa,
                    estado:'REFORMULACION'
                    },
                    })
        const act_revision =  await db.actividad.findAll({
                where: {
                    isDelete: false,
                    idPoa: req.params.idPoa,
                    estado:'REVISION'
                    },
                    })
        const act_aprobado =  await db.actividad.findAll({
                where: {
                    isDelete: false,
                    idPoa: req.params.idPoa,
                    estado:'APROBADO'
                    },
                    })
                    
        const act_rechazado =  await db.actividad.findAll({
                where: {
                    isDelete: false,
                    idPoa: req.params.idPoa,
                    estado:'RECHAZADO'
                    },
                    })
      res.status(200).json( {act_formulacion,act_reformulacion,act_revision,act_aprobado,act_rechazado} );
    }catch(error){
      res.status(400).json({
        message:'error al ingresar' + error
      })
    }
  }


const newRevision = async (req, res) => {
    try {
        await db.revision.create({
            revision:req.body.revision,
            tipo:req.body.tipo,
            idForaneo:req.body.id,
            idActividad:req.body.idActividad
        })
        await db.actividad.update({
            estado:'REFORMULACION'
        },{
            where:{
                id:req.body.idActividad
            }
        })
        res.status(200).json({
            message: 'revision creada con éxito'
        })

    } catch (error) {
        res.status(500).json({
            message: 'error al ingresar' + error
        })
    }
};

const updateRevision = async (req, res) => {
    try {
        const revision = await db.revision.findOne({
            where:{
                idTarea:req.body.idTarea
            }
        })
        if(!revision){return res.status(404).send({message:'revision no encontrada'})};

        await db.revision.create({
            nombre: req.body.nombre,
            nombre_aprobado: req.body.nombre_aprobado,

            descripcion: req.body.descripcion,
            descripcion_aprobado: req.body.descripcion_aprobado,

            cantidad: req.body.cantidad,
            cantidad_aprobado: req.body.cantidad_aprobado,

            costoUnitario: req.body.costoUnitario,
            costoUnitario_aprobado: req.body.costoUnitario_aprobado,

            objeto_grupo: req.body.objeto_grupo,
            objeto_grupo_aprobado: req.body.objeto_grupo_aprobado,

            grupo_gasto: req.body.grupo_gasto,
            grupo_gasto_aprobado: req.body.grupo_gasto_aprobado,

            unidad_medida: req.body.unidad_medida,
            unidad_medida_aprobado: req.body.unidad_medida_aprobado,

            fuente: req.body.fuente,
            fuente_aprobado: req.body.fuente_aprobado
        },{
            where:{
                id:revision.id
            }
        })
        res.status(200).json({
            message: 'revision actualizada con éxito'
        })

    } catch (error) {
        res.status(500).json({
            message: 'error al ingresar' + error
        })
    }
};

const deleteRevision = async (req, res) => {
    try{
        const revision = await db.revision.findOne({
            where:{
                idTarea:req.params.id,
                isDelete:false
            }
        })
        if(!revision){return res.status(404).send({message:'revision no encontrada'})};
        await db.revision.update({
            isDelete:true
        },{
            where:{
                id:revision.id
            }
        }) 
        return res.status(200).send({message:'ok'});
    }catch(e){
        return res.status(500).send({message:'Server error '+e})
    }
}


module.exports = {
    allRevision_by_idActividad,
    newRevision,
    updateRevision,
    deleteRevision,
    actividadesByEstado,
    getPoasForRevision,
    getPoaDeptosForRevision,
    getActividadesForRevisionByIdPoaDepto,
    getDataofActividadForRevision,
    setAprobada
}