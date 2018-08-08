var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "192.168.99.100",
  port: 3306,
  user: "root",
  password: "",
  database: "parties_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
