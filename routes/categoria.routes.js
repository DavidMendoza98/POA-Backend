//const { authJwt } = require("../middleware");
const controller = require("../controllers/categoria.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/categoria/get_all", controller.get_all_categorias);
  app.get("/categoria/eliminar/:id",controller.disable_categoria);
  app.post("/categoria/crear",controller.create_categoria);
  app.put("/categoria/actualizar",controller.update_categoria);
  app.get("/categoria/get_all_by_id/:id", controller.get_categoria);
};