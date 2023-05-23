//const { authJwt } = require("../middleware");
const controller = require("../controllers/poa.controller");
//const controllerauth = require("../controllers/auth.controller");
//const { permisosJwt } = require("../middleware");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/POA/allPoasbyUE/:token", controller.allPoasbyUE);

  app.post("/POA/new_POA", controller.new_POA);
  app.post("/POA/poaDepto", controller.new_poa_depto);
  app.get("/POA/get_POA", controller.get_POA);
  app.put("/POA/disablePOA", controller.disable_POA);
  app.put("/POA/deletePOA", controller.delete_POA);
  app.put("/POA/activePOA", controller.active_POA);
  app.post("/POA/updatePOA", controller.updatePOA);
  app.put("/POA/updatePoaDepto", controller.updatePoaDepto);
  app.get("/POA/poaByIdDepto/:idDepto", controller.get_all_poa_by_idDepto);
  app.get("/POA/poasDeptoByUE/:idPoa", controller.get_all_poas_depto_by_idPoaUE);
  app.get("/POA/get/:id", controller.get_poa);
  app.get("/POA/getPoaDeptoById/:id", controller.get_poa_depto_by);
  app.get("/POA/getMisPoas/:idDepto", controller.misPOAs);
  app.get("/POA/getAllActivites/:idPoa",controller.get_all_actividades_by_idPoa);
};


