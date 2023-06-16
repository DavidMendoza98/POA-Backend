const controller = require("../controllers/departamento.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/depto/get_all/:idUnidadEjecutora", controller.get_all_deptos);
  app.get("/depto/get_my_deptos", controller.get_my_deptos);
  app.get("/depto/get/:id",controller.get_depto);
  app.put("/depto/delete",controller.disable_depto);
  app.put("/depto/update",controller.update_depto);
  app.post("/depto/create",controller.new_depto);
  app.get("/depto/getEmpleados/:id",controller.getEmpleados)
};



