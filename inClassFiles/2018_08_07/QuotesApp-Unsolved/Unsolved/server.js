var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "192.168.99.100",
  port: 3306,
  user: "root",
  password: "",
  database: "quotes_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  connection.query("SELECT * FROM quotes;", function (err, data) {
    if (err) {
      return res.status(500).end();
    }

    res.render("index", { quotes: data });
  });

  app.post("/todos", function (req, res) {
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function (err, result) {
      if (err) {
        return res.status(500).end();
      }

      // Send back the ID of the new todo
      res.json({ id: result.insertId });
      console.log({ id: result.insertId });
    });
  });

});
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
