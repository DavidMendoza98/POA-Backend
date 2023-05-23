
const controller = require("../controllers/ue_presupuesto.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/ue_presupuesto/create",controller.new_ue_presupuesto);
  app.post("/ue_presupuesto/get_status_depto",controller.get_status_depto);
  app.get("/ue_presupuesto/get_all/:idUnidadEjecutora",controller.get_all_ue_presupuesto);
  app.get("/ue_presupuesto/get_status/:idUnidadEjecutora/:anio",controller.get_status_ue_presupuesto);
  app.get("/ue_presupuesto/get/:id",controller.get_one_ue_presupuesto);
  app.put("/ue_presupuesto/establecer_habilitado",controller.set_habilitado);
  app.put("/ue_presupuesto/establecer_predeterminado",controller.set_prederminado);
};