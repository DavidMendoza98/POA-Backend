const db = require("../models");
const config = require("../config/auth.config");
const { request, response } = require('express');
const { Op, DataTypes, Model } = require("sequelize");
const { resultado, pei } = require("../models");
// controlador para crear una nueva ctividad


const newActividad = async (req, res) => {
    try {
        
        const poaDepto = await db.poa_depto.findOne({ where: { id: req.body.idPoaDepto } })
        const depto = await db.depto.findOne({ where: { id: poaDepto.idDepto } })
        
        if (!poaDepto) {
            return res.status(404).json({ message: 'poa del departamento incorrecto' });
        }
        const poa = await db.poa.findOne({ where: { id: poaDepto.idPoaUE} })
        if (!poa) {
            return res.status(404).json({ message: 'poa incorrecto' });
        }
        const resultado = await db.resultado.findByPk(req.body.idResultado);
        // creacion del correlativo
        let correlativo = poa.anio.toString() + '-';
        // primer segmento sobre categoria de la actividad
        if(req.body.categoria === '1') correlativo = correlativo + 'CA-';
        if(req.body.categoria === '2') correlativo = correlativo + 'JF-';
        if(req.body.categoria === '3') correlativo = correlativo + 'AD-';
        
        // segundo, tercer  y cuarto segmento sobre el diminutivo del depto , -R- sobre resultado este ultimo es permanente y el id del resultado
        correlativo = correlativo + depto.siglas.toString() + '-R-' + resultado.idDimension.toString() + '-' + resultado.id.toString() + '-';

        // cuarto segmento es la numero actividad registrada ese a;o
        let cantidadActividades = await db.actividad.count({
            where: {
              idPoa: poa.id,
              idDepto:poaDepto.idDepto,
              isDelete : false
            }
          })
          cantidadActividades = cantidadActividades + 1;
        correlativo = correlativo + cantidadActividades.toString();
        

        
        
        const actividadCreada = await db.actividad.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            correlativo:correlativo,
            resultadoActividad:req.body.resultadoActividad,
            poblacion_objetivo: req.body.poblacion_objetivo,
            medio_verificacion: req.body.medio_verificacion,
            estado: "FORMULACION",
            idPoa: poa.id,
            idPoaDepto: poaDepto.id,
            idDepto:poaDepto.idDepto,
            idInstitucion: poa.idInstitucion,
            idUE: poa.idUE,
            idTipo:req.body.idTipo,
            idResultado:req.body.idResultado,
            idCategoria: req.body.idCategoria,
        });
        await db.ACencargados.create({
               idActividad: actividadCreada.id,
               idEmpleado: req.usuario.idEmpleado
        });
        return res.status(200).json({ status: "Ok" });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
};




//controlador para borrar un actividad del poa

const delete_actividad = async (req, res) => {
    try {
        const delete_actividad = await db.actividad.update({
            isDelete: true
        }, {
            where: {
                id: req.body.id
            }
        });
        await db.indicadoresPoa.update({
            isDelete: true
        }, {
            where: {
                idActividad: req.body.id
            }
        });

        await db.planificacion.update({
            isDelete: true
        }, {
            where: {
                idActividad: req.body.id
            }
        });
        let idTareas = await db.tarea.findAll({
            attributes:['id'],
            where:{
                idActividad: req.body.id
            }
        })

        idTareas = idTareas.filter(item => item.id);

        await db.tarea.update({
            isDelete: true
        }, {
            where: {
                idActividad: req.body.id
            }
        });

        await db.presupuesto.update({
            isDelete: true
        }, {
            where: {
                idtarea: {[Op.in]:idTareas}
            }
        });

        if (delete_actividad) {
            res.status(200).send({
                message: "actividad eliminada correctamente"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


const updateActividad = async (req, res) => {
    try {
        if (!req.body.nombre) {
            return res.status(400).json({ message: 'Debe enviar todos los datos nombre' });
        }
        if (!req.body.descripcion) {
            return res.status(400).json({ message: 'Debe enviar todos los datos des' });
        }
        if (!req.body.poblacion_objetivo) {
            return res.status(400).json({ message: 'Debe enviar todos los datos pob' });
        }
        if (!req.body.medio_verificacion) {
            return res.status(400).json({ message: 'Debe enviar todos los datos med' });
        }
      
        if (!req.body.resultadoActividad) {
            return res.status(400).json({ message: 'Debe enviar todos los datos resula' });
        }
        if (!req.body.idTipo) {
            return res.status(400).json({ message: 'Debe enviar todos los datos tipo' });
        }
        if (!req.body.idCategoria) {
            return res.status(400).json({ message: 'Debe enviar todos los datos categoria' });
        }
        
        
        const temporally = await db.actividad.update(
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                resultadoActividad:req.body.resultadoActividad,
                poblacion_objetivo: req.body.poblacion_objetivo,
                medio_verificacion: req.body.medio_verificacion,
                idTipo:req.body.idTipo,
                idResultado:req.body.idResultado,
                idCategoria: req.body.idCategoria,
            },
            { where: { id: req.body.id } });

        if (temporally) {
            res.status(200).send({
                message: "Actividad actualizada con exito",
                actividad: temporally
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const get_actividad = async (req, res) => {
    try {
        const actividad = await db.actividad.findOne({ 
            where: { 
                id: req.params.id 
            }, include: [
                {model:db.resultado, 
                    include:db.dimension
                },
                {model:db.depto},
                {model:db.poa}
            ]
        })
        if (!actividad) {
            return res.status(404).json({ message: 'No se encuentra esa actividad' });
        }
        return res.status(200).json({ status: "Ok", actividad });
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}


//Funcion para obtener todas las actividades
const get_all_actividades = async (req, res) => {
    try {
        const all_actividades = await db.actividad.findAll(
            {
                where: {
                    isDelete: false
                },
                include: [{
                    model: db.poa,
                },{
                    model: db.resultado
                }]
            }


        );
        if (!all_actividades) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividades);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
};

const get_all_actividad_by_idPoa = async (req, res) => {
    try {
        const all_actividad = await db.actividad.findAll(
            {
                where: {
                    isDelete: false,
                    idPoaDepto: req.params.idPoa
                },
                include: [{
                    model: db.poa
                }],order:[
                    ['createdAt','DESC']]
            })
        if (!all_actividad) {
            return res.status(404).send({ message: 'no hay ningun elemento' });
        }
        return res.status(200).json(all_actividad);
    } catch (error) {
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

const setEstadoDeActividad = async (req, res) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        if (!req.body.estado) {
            return res.status(400).json({ message: 'Debe enviar todos los datos' });
        }
        
        const temporally = await db.actividad.update(
            {
                estado: req.body.estado
            },
            { where: { id: req.body.id } });
        
            switch (req.body.estado) {
                case 'REVISION':
                    await db.evento.create({
                        evento:'Ha finalizado una actividad, ya puede ser revisada.',
                        tipo:'REVISION',
                        fecha: new Date(Date.now()),
                        idUser: req.usuario.idUsuario,
                        idActividad:req.body.id
                    })
                  break;
                case 'APROBADO':
                    await db.evento.create({
                        evento:'Esta actividad se ha aprobado.',
                        tipo:'APROBADO',
                        fecha: new Date(Date.now()),
                        idUser: req.usuario.idUsuario,
                        idActividad:req.body.id
                    })
                  break;
                case 'RECHAZADO':
                    await db.evento.create({
                        evento:'Esta actividad se ha rechazado.',
                        tipo:'RECHAZADO',
                        fecha: new Date(Date.now()),
                        idUser: req.usuario.idUsuario,
                        idActividad:req.body.id
                    })
                  break;
              }
        if(req.body.estado === 'APROBADO'){
            await db.tarea.update({
                estado: 'APROBADO'
              }, {
                where: {
                  idActividad: req.body.id,
                  estado:'REVISION'
                }
              });
        }
        if (temporally) {
            res.status(200).send({
                message: "Actividad actualizada con exito",
                actividad: temporally
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: "Server Error: " + error });
    }
}

module.exports = {
    newActividad,
    get_all_actividad_by_idPoa,
    get_actividad,
    updateActividad,
    delete_actividad,
    get_all_actividades,
    setEstadoDeActividad
}