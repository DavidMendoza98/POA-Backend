const pass = require("./auth.config")
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1999",
    DB: "db_poa",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };