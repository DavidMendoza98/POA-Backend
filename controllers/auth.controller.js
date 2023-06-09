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
            permisos:permisos
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

const logout = async (req,res) => {
    try{
        if(!req.body.token){
            return res.status(403).send({message:'Error debe enviar el token de sesion'})
        }
        const sesion = await db.sesion.findOne({
                where: {
                    token: req.body.token,
                    isDelete: false
                }
            }
        );

        if(!sesion){
            return res.status(401).send({message:'Token invalido'});
        }
        const sesionUpdate = await db.sesion.update(
            {
                isActive :false
            },
            {
                where:{
                    token : sesion.token
                }
            }
        )
        return res.status(200).send(sesionUpdate);

    }catch(error){
        return res.status(500).send({error:error});
    }
}

// Controlador para la validacion de username
const checkSesion = async (req, res) => {
    if (!req.params.token) {
        return res.status(403).send({
            message: "Error debe enviar el token de sesion!",
        });
    }
    const sesion = await db.sesion.findOne({
            where: {
                token: req.params.token,
                isDelete: false,
                isActive:true
            }
        }
    );

    if(!sesion){
        return res.status(401).send({message:'Token invalido'});
    }
    const decodedToken = jwt.decode(sesion.token);
    const dateCreated = new Date(sesion.createdAt);
    const dateNow = new Date();

    if((decodedToken.exp + dateCreated.getTime()) < dateNow.getTime()){
        return res.status(401).send({message:"expired"});
    }
    return res.status(200).send({message:"valid"});

    

    
};
verifyToken =  (token) =>{
    try{
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.idUsuario = decoded.idUsuario;
            req.idEmpleado = decoded.idEmpleado;
            req.idSesion = decoded.idSesion;
            next();
        });
    }catch(error){
        return res.status(500).send("Error from server: "+error)
    }

}

  module.exports = {
    login,
    logout,
    checkSesion
  }