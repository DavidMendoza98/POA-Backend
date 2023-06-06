const controller = require("../controllers/techos.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/techo_ue/get_all/:idPoa",controller.get_all_techos_by_idpoa);
  app.get("/techo_ue/get_all_for_create_techo_depto/:idPoa",controller.get_techos_ue_for_create_techo_depto);
  app.get("/techo_depto/get_techos_depto_by_poa_y_depto/:idPoa/:idDepto",controller.get_techos_depto_by_poa_y_depto);
  app.put("/techo_ue/delete",controller.delete_techo_ue);
  app.put("/techo_depto/delete",controller.delete_techo_depto);
  app.post("/techo_depto/create",controller.new_techo_depto);

}