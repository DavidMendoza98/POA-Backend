//const { authJwt } = require("../middleware");
const controller = require("../controllers/resultado.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  })

  app.get("/resultados/get-all",controller.allResultado);
  app.get("/resultados/getResultado/:id",controller.getResultado);
  app.get("/resultados/getResultado_by_idArea/:idArea",controller.AllResultado_by_idArea);
  app.post("/resultados/crear",controller.newResultado);
  app.get("/resultados/deleteResultado/:id",controller.deleteResultado);
  app.put("/resultados/updateResultado",controller.updateResultado);
  app.get("/resultados/getResult/:id",controller.get_Result);
  app.get("/resultados/getResultado_by_idPei/:idPei",controller.AllResultado_by_idPei);
  app.get("/resultados/getResultado_by_idDimension/:idDimension",controller.AllResultado_by_idDimension);
  

};