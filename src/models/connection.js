// Get the client
const mysql = require("mysql2/promise");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Ensynus",
});

module.exports = connection;
