var mysql = require("mysql");

var connection = mysql.createConnection({
  //host: "localhost",

  host: "192.168.99.100",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  // password:"root",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});
