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
  app.post("/empleado/crear",controller.new_Empleado);
  app.get("/empleado/delete/:id",controller.disable_empleado);
  app.get("/empleado/empDepto/:idEmpleado",controller.getDeptoByIdEmpleado);
  app.put("/empleado/update",controller.update_empleado);
  app.get("/empleado/getDeptos",controller.get_deptos);
  app.post("/empleado/deptos_by_id_empleado",controller.get_deptos_by_id_empleado);
  app.post("/empleado/addDepto",controller.newDeptoForEmpleado);
  app.get("/empleado/AllEmpleados_responsables_tarea/:id",controller.AllEmpleados_responsables_tarea);
  app.get("/empleado/deleteDepto/:idEmpleado/:idDepto",controller.deleteDepto);

  app.post("/empleado/add_emplead_tarea",controller.addEmpleado_Tarea);
  app.put("/empleado/eliminar_empleado_tarea",controller.eliminarEmpleado_Tarea);


};