const controller = require("../controllers/auth.controller");
const { validarToken, validarSesion } = require('../middleware/auth.middleware');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  })

  
  app.post("/auth/login",controller.login);
  app.post("/auth/logout",controller.logout);
  app.get("/auth/check",validarToken,validarSesion,controller.checkSesion);
  app.post("/insertar_actividades",controller.insertar_actividades);
  
};