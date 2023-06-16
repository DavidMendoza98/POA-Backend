//const { authJwt } = require("../middleware");
const controller = require("../controllers/empleado.controller");
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
  app.get("/empleado/get/:id",controller.get_empleado_by_id);
  app.get("/empleado/allEmpleados",controller.get_empleados);
  app.post("/empleado/crear",controller.new_empleado);
};