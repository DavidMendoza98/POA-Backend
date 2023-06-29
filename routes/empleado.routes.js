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
 // app.get("/empleado/allEmpleadosByIdActividad/:idActividad",controller.get_empleados_by_Actividad);
  app.post("/empleado/crear",controller.new_empleado);
  app.get("/empleado/AllEmpleados_responsables_tarea/:idTarea",controller.AllEmpleados_responsables_tarea);
};