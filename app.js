const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const init = require("./config/init.config");
//const bcrypt = require('bcrypt');




const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//app.use("/auth",user_routes); // permite usar las rutas de usuarios
require("./routes/rol.routes")(app);
require("./routes/user.routes")(app);
require("./routes/empleado.routes")(app);


app.use(
  cookieSession({
    name: "poa-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
    sameSite: 'strict'
  })
);

// database
const db = require("./models/");
db.sequelize.sync();

/*
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  init.initial();
});
*/


// simple route
app.get("/", (req, res) => {
  res.json({ message: "¡Bienvenido!" });
});

app.get("/saludo",(req,res) => {
  res.json({
    saludo:"hola"
  })
});


   // --------------------------------
// routes
//require("./routes/user.routes")(app);


//require("./routes/users")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use('images', express.static('./images'))