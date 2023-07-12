//const { authJwt } = require("../middleware");
const controller = require("../controllers/tareas_historico.controller");
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
  app.get("/tareah/get_all", controller.AllTareasH);
  app.post("/tareah/create",controller.create);

}