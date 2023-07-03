//const { authJwt } = require("../middleware");
const controller = require("../controllers/indicadoresPoa.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  })

  app.get("/indicadoresPOA/get-all",controller.allindicadores);
  app.get("/indicadores/getIndicador_by_idActividad/:idActividad",controller.AllIndicador_by_idActividad);
  app.get("/indicadores/getIndicador_by_idActividadForPlanificacion/:idActividad",controller.AllIndicador_by_idActividad_for_planificacion);
  app.post("/indicadoresPOA/crear",controller.newIndicador);
  app.get("/indicadoresPOA/deleteIndicadores/:id",controller.deleteIndicador);
  app.put("/indicadoresPOA/updateIndicadores",controller.updateIndicador);
  app.get("/indicadoresPOA/get-Depto/:id", controller.get_Depto);
  app.get("/indicadoresPOA/get-Indicadores/:id", controller.get_indicador);
  app.put("/indicadoresPOA/seguimiento",controller.seguimiento);

};