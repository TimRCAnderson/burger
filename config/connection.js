var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.connection({
  host: "localhost",
  user: "root",
  password: process.env.password,
  database: "burgers_db"
});

connection.connect();

module.exports = connection;
