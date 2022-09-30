const db = require("../models/");
const empleadoModel = require("../models/empleado.model");
const roleModelb = require("../models/role.model");
const userModel = require("../models/usuario.model");
const permisoModel = require("../models/permiso.model");
const bcrypt = require("bcryptjs");
const config = require("./auth.config.js");
const { DB } = require("./db.config");
const { roles_permiso } = require("../models/");
const Role = db.role;
const User = db.user;
const Empleado = db.empleado;
const Permiso = db.permiso;
const permiso_role = db.roles_permiso;
const PEI = db.pei;
//const Sesion = db.sesion;


/*
exports.initial = async () => {
    try {
        

        await Role.create({
            id: 1,
            rol: "admin",
            descripcion: "super usuario",
            idPermiso: 1,
        });

        
        await Empleado.create({
            id: 1,
            dni: "02012",
            nombre: "root",
            apellido: "root",
            direccion: "La libertad",
            telefono: "123",
            fechaNacimiento:'1995-08-07',
            sexo: "M",
        });
        
        await User.create({
            username: "root",
            password: bcrypt.hashSync(config.secret, 8),
            idEmpleado: 1,
            idRol: 1
        });
        //Agregue tabla catalogo de permisos de permisos
        await Permiso.create({
            id: 1,
            Permiso: "Edicion de documentos",
            Descripcion: "Le permite a este usuario editar documentos"
        });

        await roles_permiso.create({
            idRol:1,
            idPermiso: 1
        })

        } catch (error) {
            console.log(error);
        }


    };*/