const controller = require("../controllers/actividadEncargado.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/actividadEncargado/get_All",controller.get_all_actividadesEncargado);
  app.get("/actividadEncargado/get/:id",controller.get_actividadEncargado);
  app.get("/get_encargados_de_actividad/:idActividad",controller.get_encargados_de_actividad);
  app.put("/actividadEncargado/eliminar",controller.delete_actividadEncargado);
  app.put("/actividadEncargado/editar",controller.updateActividadEncargado);
  app.post("/actividadEncargado/crear",controller.newActividadEncargado);

  app.get("/actividadEncargado/get_all_by_idResultado/:idResultado", controller.get_all_actividad_by_idResultado);


};



