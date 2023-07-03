const db = require("../models/");
const config = require("../config/auth.config");
const User = db.user;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// controlador para el inicio de sesion
const login = async (req, res) => {
    //return res.status(200);
    try {
        // obtener usuario de la bd
        const user = await User.findOne({
            where: {
                username: req.body.username,
                isDelete: false
            },
            include: [{
                model: db.role,
            }, {
                model: db.empleado, include: [{
                    model: db.ue, include: [{
                        model: db.institucion
                    }]
                }]
            }]
        });

        // 404 si no hay usuario con el id proporcionado
        if (!user) {
            return res.status(404).send({
                message: "User Not found."
            });
        }

        // bloque de codigo para obtener la lista de permisos
        const id_permisos = await db.roles_permiso.findAll({
            where: {
                idRol: user.role.id
            }
        })
        const permisos = []
        for (let i = 0; i < id_permisos.length; i++) {
            const permiso_individual = await db.permiso.findOne({ where: { id: id_permisos[i].idPermiso } });
            permisos.push(permiso_individual.Permiso);
        }
        // bloque de codigo para obtener la lista de departamentos
        const id_deptos = await db.empleado_depto.findAll({
            where: {
                idEmpleado: user.empleado.id
            }
        })
        const deptos = []
        for (let i = 0; i < id_deptos.length; i++) {
            deptos.push(await db.depto.findOne({ where: { id: id_deptos[i].idDepto } }));

        }

        // validar contrase;a
        const passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        // error al no coincidir contrase;a
        if (!passwordIsValid) {
            return res.status(401).send({
                message: "Warning! Invalid Password!",
            });
        }
        

        const token = jwt.sign({
            idUsuario: user.id,
            idEmpleado: user.empleado.id,
            idUE: user.empleado.idUnidadEjecutora,
            permisos: permisos
        },
            config.secret, {
            expiresIn: 86400, // 24 horas de ducración de tokens
        });

        const ses = await db.sesion.create({
            idUsuario: user.id,
            token: token
        });



        const resp = {
            id: user.id,
            usuario: user.username,
            empleado: user.empleado,
            rol: user.role,//,
            permisos: permisos,
            departamentos: deptos,
            sesion: ses,
            token: token
        }
        return res.status(200).send(resp);
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message: error.message
        });
    }

};

const logout = async (req, res) => {
    try {
        const token = req.header('Authorization');


    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Falta el token de autenticación.' });
    }
        const sesion = await db.sesion.findOne({
            where: {
                token: token,
                isDelete: false,
                isActive: true
            }
        }
        );

        if (!sesion) {
            return res.status(401).send({ message: 'Token invalido' });
        }
        const sesionUpdate = await db.sesion.update(
            {
                isActive: false,
                isDelete: true
            },
            {
                where: {
                    token: sesion.token
                }
            }
        )
        return res.status(200).send(sesionUpdate);

    } catch (error) {
        return res.status(500).send({ error: error });
    }
}

// Controlador para la validacion de username
const checkSesion = async (req, res) => {
    const token = req.header('Authorization');


    if (!token) {
        return res.status(401).json({ mensaje: 'Acceso denegado. Falta el token de autenticación.' });
    }
    if(!req.usuario){
        return res.status(401).send({ message: 'Token invalido' });
    }

    try {
        // obtener usuario de la bd
        const user = await User.findOne({
            where: {
                id: req.usuario.idUsuario,
                isDelete: false
            },
            include: [{
                model: db.role,
            }, {
                model: db.empleado, include: [{
                    model: db.ue, include: [{
                        model: db.institucion
                    }]
                }]
            }]
        });

        // 404 si no hay usuario con el id proporcionado
        if (!user) {
            return res.status(404).send({
                message: "User Not found."
            });
        }

        // bloque de codigo para obtener la lista de permisos
        const id_permisos = await db.roles_permiso.findAll({
            where: {
                idRol: user.role.id
            }
        })
        const permisos = []
        for (let i = 0; i < id_permisos.length; i++) {
            const permiso_individual = await db.permiso.findOne({ where: { id: id_permisos[i].idPermiso } });
            permisos.push(permiso_individual.Permiso);
        }
        // bloque de codigo para obtener la lista de departamentos
        const id_deptos = await db.empleado_depto.findAll({
            where: {
                idEmpleado: user.empleado.id
            }
        })
        const deptos = []
        for (let i = 0; i < id_deptos.length; i++) {
            deptos.push(await db.depto.findOne({ where: { id: id_deptos[i].idDepto } }));

        }
        
        const new_token = jwt.sign({
            idUsuario: user.id,
            idEmpleado: user.empleado.id,
            idUE: user.empleado.idUnidadEjecutora,
            permisos: permisos
        },
            config.secret, {
            expiresIn: 86400, // 24 horas de ducración de tokens
        });

        await db.sesion.update({
            token:new_token
        },{
            where:{
                token:token
            }
        })

        return res.status(200).send(JSON.stringify(new_token));

    } catch(error) {
        console.log(error);
        return res.status(500).send({'error':'Error en el servidor al validar token'})
    };
};

const insertar_actividades = async (req, res) => {
    try {
        // if(!req.body.data){
        //     return res.status(400).send({'message':'No fue enviada la data'});
        // }

        // if(!req.body.idDepto){
        //     return res.status(400).send({'message':'No fue enviado el id del departamento'});
        // }


        // if (!poaDepto){
        //     return res.status(403).send({'message':'no se encontró el poa depto'});
        // }

        const data = [
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecimiento del almacén de materiales de oficina y para gestiones del departamento",
                "indicador": "% de materiales de oficina adquiridos",
                "responsable": "Adminitrador",
                "poblacion_objetivo": "Administración",
                "medio_verificacion": "Existencia de inventario, Actas de entrega.",
                "correlativo": "ADMIN-R-12-031",
                "nombre": "Adquisicion de materiales de oficina",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "100.00%",
                "fecha_inicio_1": "1/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "",
                "fecha_inicio_2": "",
                "fecha_fin_2": "",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "b.2. Mejora continua de indicadores (de calidad y pertinencia) institucionales, nacionales e internacionales, sobre la producción, difusión, gestión e innovación científica y técnica.",
                "resultado_a": "Diagnóstico de procesos y propuesta de sistematización",
                "indicador": "% de avance de documento diagnostico y propuesta de sistematización",
                "responsable": "Dirección",
                "poblacion_objetivo": "Unidades académicas y administrativas",
                "medio_verificacion": "Borrador documento de diagnostico y propuesta de sistematización",
                "correlativo": "ADMIN-R-10-031",
                "nombre": "Sistematización de procesos administrativos y académicos",
                "categoria": "PROGRAMAS/PROYECTOS",
                "planificacion_num_1": "",
                "planificacion_por_1": "25.00%",
                "fecha_inicio_1": "6/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "25.00%",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "50.00%",
                "fecha_inicio_3": "1/7/2023",
                "fecha_fin_3": "30/9/2023",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Disponibilidad de equipo de fotocopiado e impresión para cubrir necesidades de impresión de unidades CURLP.",
                "indicador": "Cantidad de equipo de impresión y fotocopiado disponible",
                "responsable": "Adminitrador",
                "poblacion_objetivo": "Unidades académicas y administrativas",
                "medio_verificacion": "Informes de impresión, pago de arrendamiento",
                "correlativo": "ADMIN-R-12-032",
                "nombre": "Alquiler de fotocopiadoras para las unidades académicas y administrativas",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "25.00%",
                "fecha_inicio_1": "1/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "25.00%",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "25.00%",
                "fecha_inicio_3": "1/7/2023",
                "fecha_fin_3": "30/9/2023",
                "planificacion_num_4": "",
                "planificacion_por_4": "25.00%",
                "fecha_inicio_4": "1/10/2023",
                "fecha_fin_4": "31/12/2023"
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Disponible equipo computadora portatil para proyecto Unidad de Control de Gestión",
                "indicador": "Computadora portatil disponible para proyecto Unidad de Control de Gestión",
                "responsable": "Karen Isabel Castro Mena",
                "poblacion_objetivo": "CURLP",
                "medio_verificacion": "Acta de recepción, equipo físico",
                "correlativo": "ADMIN-R-12-033",
                "nombre": "Alquiler de equipo computadora portatil",
                "categoria": "PROGRAMAS/PROYECTOS",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": 1,
                "planificacion_por_2": "",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "31/7/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecidas de agua purificada para consumo las Unidades (personal docente administrativo y de servicio)",
                "indicador": "% del total de botellones de agua programadas para abastecimiento al personal",
                "responsable": "Administrador",
                "poblacion_objetivo": "Personal académico y administrativo",
                "medio_verificacion": "Actas de recepción, formato registro de entrega de agua a las Unidades",
                "correlativo": "ADMIN-R-12-034",
                "nombre": "Compra de agua en botellones de 5 galones para consumo personal académico y administrativo",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "25.00%",
                "fecha_inicio_1": "9/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "25.00%",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "25.00%",
                "fecha_inicio_3": "1/7/2023",
                "fecha_fin_3": "30/9/2023",
                "planificacion_num_4": "",
                "planificacion_por_4": "25.00%",
                "fecha_inicio_4": "1/10/2023",
                "fecha_fin_4": "29/12/2023"
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecido vehículos de combustible para actividades administrativas",
                "indicador": "% combustible abastecido a vehículos",
                "responsable": "Administrador",
                "poblacion_objetivo": "Dirección, Administración",
                "medio_verificacion": "Planilla control de combustible de vehículos",
                "correlativo": "ADMIN-R-12-035",
                "nombre": "Adquisición de combustible para actividades académicas y administrativas",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "25.00%",
                "fecha_inicio_1": "9/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "25.00%",
                "fecha_inicio_2": "3/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "25.00%",
                "fecha_inicio_3": "3/7/2023",
                "fecha_fin_3": "29/9/2023",
                "planificacion_num_4": "",
                "planificacion_por_4": "25.00%",
                "fecha_inicio_4": "2/10/2023",
                "fecha_fin_4": "31/12/2023"
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Existencia disponible de insumos de bioseguridad",
                "indicador": "% de insumos de bioseguridad adquiridos",
                "responsable": "Administrador",
                "poblacion_objetivo": "CURLP",
                "medio_verificacion": "Actas de recepción y de entrega de material",
                "correlativo": "ADMIN-R-12-036",
                "nombre": "Adquisición de alcohol, gel, mascarillas.",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "100.00%",
                "fecha_inicio_1": "1/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "",
                "fecha_inicio_2": "",
                "fecha_fin_2": "",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecido el almacén de café, azucar y otros para actividades varias",
                "indicador": "% de insumos de alimentación adquiridos",
                "responsable": "Administrador",
                "poblacion_objetivo": "Personal académico y administrativo",
                "medio_verificacion": "Actas de recepción",
                "correlativo": "ADMIN-R-12-037",
                "nombre": "Adquisición de café, azucar",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": "",
                "planificacion_por_2": "50.00%",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "50.00%",
                "fecha_inicio_3": "3/7/2023",
                "fecha_fin_3": "29/9/2023",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecimiento del almacén de materiales desechables para oficina",
                "indicador": "% Materiales desechables adquiridos",
                "responsable": "Administrador",
                "poblacion_objetivo": "Personal CURLP",
                "medio_verificacion": "Acta de recepción, equipo físico",
                "correlativo": "ADMIN-R-12-038",
                "nombre": "Adquisición de desechables (vasos, platos, cubiertos, etc)",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "100.00%",
                "fecha_inicio_1": "1/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": "",
                "planificacion_por_2": "",
                "fecha_inicio_2": "",
                "fecha_fin_2": "",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Normativa aprobada y en ejecución.",
                "resultado_a": "Ejecutadas las gestiones administrativas centralizadas en CU.",
                "indicador": "Cantidad de viaticos para gestiones de la Administración",
                "responsable": "Administrador",
                "poblacion_objetivo": "CURLP",
                "medio_verificacion": "Registro de documentación entregada, copia de recibido de documentos",
                "correlativo": "ADMIN-R-12-051",
                "nombre": "Solicitud de viáticos para el seguimiento de las geStiones administrativas.",
                "categoria": "OPERACIONES",
                "planificacion_num_1": 3,
                "planificacion_por_1": "",
                "fecha_inicio_1": "1/1/2023",
                "fecha_fin_1": "31/3/2023",
                "planificacion_num_2": 5,
                "planificacion_por_2": "",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": 5,
                "planificacion_por_3": "",
                "fecha_inicio_3": "1/7/2023",
                "fecha_fin_3": "30/9/2023",
                "planificacion_num_4": 4,
                "planificacion_por_4": "",
                "fecha_inicio_4": "1/10/2023",
                "fecha_fin_4": "31/12/2023"
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Disponible tonners para impresión de documentos del departamento",
                "indicador": "Cantidad de tonners adquiridos",
                "responsable": "Administrador",
                "poblacion_objetivo": "Administración",
                "medio_verificacion": "Actas de recepción",
                "correlativo": "ADMIN-R-12-039",
                "nombre": "Adquisición de set de tonners para impresora Láser Hp 400",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": 5,
                "planificacion_por_2": "",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Espacio de oficina a temperatura adecuada",
                "indicador": "Acondicionamiento de temperatura para trabajo en oficina",
                "responsable": "Administrador",
                "poblacion_objetivo": "Administración",
                "medio_verificacion": "Acta de recepción, equipo físico",
                "correlativo": "ADMIN-R-12-0310",
                "nombre": "Adquisición de aire acondicionado",
                "categoria": "PROGRAMAS/PROYECTOS",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": 1,
                "planificacion_por_2": "",
                "fecha_inicio_2": "1/4/2022",
                "fecha_fin_2": "30/6/2022",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Proporcionado equipo para calentar alimentos del personal",
                "indicador": "Cantidad de equipo adquirido",
                "responsable": "Administrador",
                "poblacion_objetivo": "Administración",
                "medio_verificacion": "Acta de recepción, equipo físico",
                "correlativo": "ADMIN-R-12-0311",
                "nombre": "Adquisición de horno microhondas",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": 1,
                "planificacion_por_2": "",
                "fecha_inicio_2": "1/4/2023",
                "fecha_fin_2": "30/6/2023",
                "planificacion_num_3": "",
                "planificacion_por_3": "",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            },
            {
                "resultado_i": "Aulas equipadas con proyectores y equipos de ayuda multimedia, 2) Fortalecida la red de bibliotecas universitarias, librerías universitarias y la editorial, tanto virtuales como físicas.",
                "resultado_a": "Abastecimiento de marcadores al personal docente",
                "indicador": "% de material entregados",
                "responsable": "Administrador",
                "poblacion_objetivo": "PERSONAL DOCENTE",
                "medio_verificacion": "LISTADO DE ENTREGA",
                "correlativo": "ADMIN-R-12-0312",
                "nombre": "ADQUISICIÓN DE MARCADORES DE AGUA PARA PERSONAL DOCENTE",
                "categoria": "OPERACIONES",
                "planificacion_num_1": "",
                "planificacion_por_1": "",
                "fecha_inicio_1": "",
                "fecha_fin_1": "",
                "planificacion_num_2": "",
                "planificacion_por_2": "33.00%",
                "fecha_inicio_2": "",
                "fecha_fin_2": "",
                "planificacion_num_3": "",
                "planificacion_por_3": "33.00%",
                "fecha_inicio_3": "",
                "fecha_fin_3": "",
                "planificacion_num_4": "",
                "planificacion_por_4": "33.00%",
                "fecha_inicio_4": "",
                "fecha_fin_4": ""
            }
        ]



        let poaDepto = await db.poa_depto.findOne({
            where: {
                idDepto: 7
            }
        })
        const data_no_insertada = [];
        for (const i of data) {
            //console.log(i);
            let resultado = await db.resultado.findOne({
                where: {
                    nombre: i.resultado_i
                }
            })
            if (!resultado) {
                data_no_insertada.push(i);
                continue;
            }



            const actividadCreada = await db.actividad.create({
                nombre: i.nombre,
                descripcion: 'Actividad',
                correlativo: i.correlativo,
                resultadoActividad: i.resultado_a,
                poblacion_objetivo: i.poblacion_objetivo,
                medio_verificacion: i.medio_verificacion,
                estado: "APROBADO",
                categoria: i.categoria,
                idPoa: 1,
                idPoaDepto: poaDepto.id,
                idInstitucion: 1,
                idDepto: poaDepto.idDepto,
                idUE: 1,
                idTipo: 5,
                idResultado: resultado.id
            });

            let isPorcentaje = false;

            if (i.planificacion_por_1 !== "" || i.planificacion_por_2 !== "" || i.planificacion_por_3 !== "" || i.planificacion_por_4 !== "") {
                isPorcentaje = true;
            }
            let cantidad = 0;
            if (!isPorcentaje) {
                let trim_1 = i.planificacion_num_1 === "" ? 0 : parseInt(i.planificacion_num_1);
                let trim_2 = i.planificacion_num_2 === "" ? 0 : parseInt(i.planificacion_num_2);
                let trim_3 = i.planificacion_num_3 === "" ? 0 : parseInt(i.planificacion_num_3);
                let trim_4 = i.planificacion_num_4 === "" ? 0 : parseInt(i.planificacion_num_4);
                cantidad = trim_1 + trim_2 + trim_3 + trim_4;
            }

            const indicador = await db.indicadoresPoa.create({
                nombre: i.indicador,
                descripcion: i.indicador,
                cantidadPlanificada: isPorcentaje ? 100 : cantidad,
                isCantidad: !isPorcentaje,
                isPorcentaje: isPorcentaje,
                idActividad: actividad.id

            })

            if (i.planificacion_num_1 !== "" || i.planificacion_por_1 !== "") {

                await db.planificacion.create({
                    idMes: fecha_inicio_1.split('/')[1],
                    idIndicador: indicador.id,
                    cantidad: isPorcentaje ? i.planificacion_por_1.substring(0, planificacion_por_1.length - 1) : i.planificacion_num_1,
                    fechaInicio: fecha_inicio_1,
                    fechaFin: fecha_fin_1,
                    idActividad: actividadCreada.id
                });
            }

            if (i.planificacion_num_2 !== "" || i.planificacion_por_2 !== "") {

                await db.planificacion.create({
                    idMes: fecha_inicio_2.split('/')[1],
                    idIndicador: indicador.id,
                    cantidad: isPorcentaje ? i.planificacion_por_2.substring(0, planificacion_por_2.length - 1) : i.planificacion_num_2,
                    fechaInicio: fecha_inicio_2,
                    fechaFin: fecha_fin_2,
                    idActividad: actividadCreada.id
                });
            }

            if (i.planificacion_num_3 !== "" || i.planificacion_por_3 !== "") {

                await db.planificacion.create({
                    idMes: fecha_inicio_3.split('/')[1],
                    idIndicador: indicador.id,
                    cantidad: isPorcentaje ? i.planificacion_por_3.substring(0, planificacion_por_3.length - 1) : i.planificacion_num_3,
                    fechaInicio: fecha_inicio_3,
                    fechaFin: fecha_fin_3,
                    idActividad: actividadCreada.id
                });
            }
            if (i.planificacion_num_4 !== "" || i.planificacion_por_4 !== "") {

                await db.planificacion.create({
                    idMes: fecha_inicio_4.split('/')[1],
                    idIndicador: indicador.id,
                    cantidad: isPorcentaje ? (i.planificacion_por_4.substring(0, planificacion_por_4.length - 1)) : i.planificacion_num_4,
                    fechaInicio: fecha_inicio_4,
                    fechaFin: fecha_fin_4,
                    idActividad: actividadCreada.id
                });
            }

        }

        return res.status(200).send(data_no_insertada)

    } catch (error) {
        console.log(error)
        return res.status(500).send({ 'error': 'No fue posible realizar el trabajo, error:', error })
    }
}

module.exports = {
    login,
    logout,
    checkSesion,
    insertar_actividades
}