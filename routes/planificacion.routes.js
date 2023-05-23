const controller = require("../controllers/planificacion.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/planificacion/get_all/:idActividad", controller.get_all_Planificacion);
  app.get("/planificacion/get/:id", controller.get_Planificacion);
  app.put("/planificacion/delete", controller.disable_Planificacion);
  app.put("/planificacion/update", controller.update_Planificacion);
  app.post("/planificacion/create", controller.new_Planificacion);
  app.get("/planificacion/get_all_by_id_actividad/:idActividad", controller.get_all_planificaciones_by_idActividad);

};
