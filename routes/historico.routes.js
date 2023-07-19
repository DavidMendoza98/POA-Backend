const controller = require("../controllers/historico.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/historico/search/:search/:limit",controller.get_historico);
  app.get("/historico/limit/:limit",controller.get_historico_limit);
};



