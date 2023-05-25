const controller = require("../controllers/subscriptions.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  })

  
  app.post("/subscription/emit",controller.enviarNotificacion);
  
};