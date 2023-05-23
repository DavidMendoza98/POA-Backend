const jwt = require("jsonwebtoken");
const {secret} = require("../config/auth.config");
const db = require("../models/");

validarToken = (req, res, next) =>{
    const token = req.header('Authorization');
  
    // Si no se proporcionó un token, enviar una respuesta de error
    if (!token) {
      return res.status(401).json({ mensaje: 'Acceso denegado. Falta el token de autenticación.' });
    }
  
    try {
      // Verificar si el token es válido
      const decoded = jwt.verify(token, secret);
      
      // Establecer la información de usuario decodificada en el objeto de solicitud
      //req.usuario = db.usuario.findByPk(decoded.idUsuario);
      //req.empleado = db.empleado.findByPk(decoded.idEmpleado);
      req.usuario = decoded
      
      // Continuar al siguiente middleware
      next();
    } catch (ex) {
      // Si el token no es válido, enviar una respuesta de error
      res.status(400).json({ mensaje: 'Token no válido.' });
    }
  }
validarSesion = (req, res, next) =>{
    // Comprobar si la información de usuario se ha establecido en el objeto de solicitud
    if (!req.usuario) {
      return res.status(401).json({ mensaje: 'Acceso denegado. Falta información de sesión.' });
    }
    // Validar si el token ha expirado
    const fechaActual = new Date();
    const fechaExpiracion = new Date(req.usuario.exp * 1000); // La función Date() espera una fecha en milisegundos
    if (fechaActual > fechaExpiracion) {
      return res.status(401).json({ mensaje: 'Acceso denegado. El token ha expirado.' });
    }
  
    // Si la información de usuario está presente, continuar al siguiente middleware
    next();
  }

const authMiddleware = {
    validarToken,
    validarSesion
  };
module.exports = authMiddleware;
