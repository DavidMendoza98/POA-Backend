//const { authJwt } = require("../middleware");
const controller = require("../controllers/presupuesto.controller");
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
  app.get("/presupuesto/get_all", controller.allPresupuesto);
  app.get("/presupuesto/eliminar/:id",controller.deletePresupuesto);
  app.post("/presupuesto/crear",controller.newPresupuesto);
  app.put("/presupuesto/actualizar",controller.updatePresupuesto);
  app.put("/presupuesto/actualizar_parcial",controller.update_parcial_Presupuesto);
  app.get("/presupuesto/presupuesto_by_idtarea/:idtarea", controller.presupuesto_by_idTarea)
  // app.get("/presupuesto/prueba", controller.probando_like)
};