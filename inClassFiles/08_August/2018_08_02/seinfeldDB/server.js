var express = require("express");
var mysql = require("mysql")


var app = express();
var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "192.168.99.100",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "seinfeld_db"
});


//CREATE TABLE actors(
//     id INTEGER NOT NULL AUTO_INCREMENT,
//     character_name VARCHAR(50) NOT NULL,
//     coolness_points int(50) NOT NULL,
//     attitude VARCHAR(50) NOT NULL,
//     PRIMARY KEY (id)
//    );

app.get("/actors", function (req, response) {
    
    var query = connection.query("SELECT * FROM actors", function (err, res) {
        var html = "<ul>"
        if (err) throw err;
       
        res.forEach(element => {
            html += "<li>"
            html += element.id + " | " + element.character_name + " | "  + element.coolness_points + " | " + element.attitude 
            html += "</li>"
        });
        html += "</ul>"
        response.send(html);
    })

  


})
//Create a /coolness-chart route that will display all the actors and their data ordered by their coolness points.
app.get("/coolness-chart", function (req, response) {
    
    var query = connection.query("select * from actors order by coolness_points desc", function (err, res) {
        var html = "<ul>"
        if (err) throw err;
       
        res.forEach(element => {
            html += "<li>"
            html += element.id + " | " + element.character_name + " | "  + element.coolness_points + " | " + element.attitude 
            html += "</li>"
        });
        html += "</ul>"
        response.send(html);
    })

  


})

app.get("/attitude-chart/:att", function (req, response) {
    var searchParam = req.params.att
    var query = connection.query("select * from actors where attitude=?",[searchParam], function (err, res) {
        var html = "<ul>"
        if (err) throw err;
       
        res.forEach(element => {
            html += "<li>"
            html += element.id + " | " + element.character_name + " | "  + element.coolness_points + " | " + element.attitude 
            html += "</li>"
        });
        html += "</ul>"
        response.send(html);
    })

  


})


app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  