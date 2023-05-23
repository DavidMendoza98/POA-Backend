const controller = require("../controllers/actividad.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/resultado/prueba/:nombre", controller.probando_like)
  app.get("/actividad/get_All",controller.get_all_actividades);
  app.get("/actividad/get/:id",controller.get_actividad);
  app.put("/actividad/eliminar",controller.delete_actividad);
  app.put("/actividad/editar",controller.updateActividad);
  app.post("/actividad/crear",controller.newActividad);
  app.put("/actividad/setEstadoDeActividad",controller.setEstadoDeActividad)

  app.get("/actividad/get_all_by_idPoa/:idPoa", controller.get_all_actividad_by_idPoa);


};