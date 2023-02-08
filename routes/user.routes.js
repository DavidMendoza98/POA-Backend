//const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  })
  app.get("/auth/get-all",controller.allUser);
  app.get("/auth/delete-user/:id",controller.deleteUser);
  app.post("/auth/create-user",controller.newUser);
  app.get("/auth/get/:id",controller.getUserById);
  app.post("/auth/update-user",controller.update_user);
  app.put("/auth/forgotPassword",controller.forgotPassword);
  app.put("/auth/newPassword",controller.newPassword);
  app.put("/auth/changePassword",controller.changePassword);
};

