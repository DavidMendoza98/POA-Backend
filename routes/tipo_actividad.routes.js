//const { authJwt } = require("../middleware");
const controller = require("../controllers/tipo_actividad.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/tipo_actividad/get_all", controller.get_all_tipos);
  app.get("/tipo_actividad/eliminar/:id",controller.disable_tipo);
  app.post("/tipo_actividad/crear",controller.create_tipo);
  app.put("/tipo_actividad/actualizar",controller.update_tipo);
  app.get("/tipo_actividad/get_all_by_id/:id", controller.get_tipo);
};