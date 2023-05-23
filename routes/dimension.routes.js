const controller = require("../controllers/dimension.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/dimension/get_all", controller.get_all_dimension);
  app.get("/dimension/get/:id",controller.get_dimension);
  app.put("/dimension/delete",controller.disable_dimension);
  app.put("/dimension/update",controller.update_dimension);
  app.post("/dimension/create",controller.new_dimension);
  app.get("/dimension/get_all_by_id_pei/:idPei", controller.get_all_dimension_by_idPei);
  app.get("/dimension/get_all_by_id_peiSegunRequest", controller.get_all_dimension_by_idPeiSegunRequest);
};