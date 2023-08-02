const controller = require("../controllers/reportes.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/reportes/get_all/:id", controller.get_all_departamento);
  app.get("/reportes/get_all_depto/:idDepto/:id", controller.get_all_poa_by_idDepto);
  app.get("/reportes/get_all_depto_poa/:idPoa/:idDepto", controller.AllTarea_by_depto_poa);
  app.get("/reportes/suma11/:idPoa", controller.suma_Fuente11);
  app.get("/reportes/suma12/:idPoa", controller.suma_Fuente12);
  app.get("/reportes/suma12B/:idPoa", controller.suma_Fuente12B);
  app.get("/reportes/nopresupuesto/:idPoa", controller.Tareas_sin_presupuesto);
  app.get("/reportes/presupuesto/:idPoa", controller.Tareas_con_presupuesto);
  app.get("/reportes/estado_Formulacio/:idPoa", controller.Actvidades_estadoF);
  app.get("/reportes/estado_ReFormulacion/:idPoa", controller.Actvidades_estadoRF);
  app.get("/reportes/estado_Revision/:idPoa", controller.Actvidades_estadoR);
  app.get("/reportes/estado_Aprobada/:idPoa", controller.Actvidades_estadoA);
  app.get("/reportes/estado_Rechazada/:idPoa", controller.Actvidades_estadoREC);
  app.get("/reportes/actividades/:idPoa", controller.Actvidades);
  app.get("/reportes/get_all_depto_poa1/:idUE/:anio",controller.AllTarea_by_depto_poa1);
  app.get("/reportes/fuente11A/:idUE/:anio",controller.AllTarea_by_depto_poa_Fuente11);
  app.get("/reportes/fuente12A/:idUE/:anio",controller.AllTarea_by_depto_poa_Fuente12);
  app.get("/reportes/fuente12BA/:idUE/:anio",controller.AllTarea_by_depto_poa_Fuente12B);
  app.get("/reportes/get_poas_UE/:idUE",controller.get_all_poa_by_idUE);
  app.get("/reportes/get_all_ue",controller.get_all_UE);


  app.get("/reportes/get_all_data_poa_depto/:id",controller.get_all_data_poa_depto);
  app.post("/reportes/get_all_data_ue_filtrada/",controller.get_all_data_ue_filtrada);
  app.post("/reportes/get_actividades_filtradas/",controller.get_actividades_filtradas);
  app.get("/reportes/get_full_actividad_detail/:id",controller.getActividadForReporte);
};
