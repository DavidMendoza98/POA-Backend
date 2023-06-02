//const { authJwt } = require("../middleware");
const controller = require("../controllers/fuente.controller");
//const controllerauth = require("../controllers/auth.controller");
//const { permisosJwt } = require("../middleware");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/fuente/get_all", controller.AllFuente);
  app.get("/fuente/eliminar/:id",controller.eliminarFuente);
  app.post("/fuente/crear",controller.newFuente);
  app.put("/fuente/actualizar",controller.updateFuente);
  app.get("/fuente/get_all_by_id/:id", controller.AllFuente_by_id);
};