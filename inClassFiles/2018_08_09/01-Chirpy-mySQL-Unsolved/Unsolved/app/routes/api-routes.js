// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================


module.exports = function(app) {


  app.get("/api/all", function (req, res) {
  // Get all chirps
  console.log("yup!")
  var queryString = "SELECT * FROM  chirps;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
     //sends back the result as a json object
     res.json(result)
    });
})

  // Add a chirp


};
