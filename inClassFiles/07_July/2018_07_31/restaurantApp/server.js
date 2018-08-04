// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Reservations JSON (DATA)
// =============================================================
var reservations = [{
 Name: "blake",
phoneNumber: 5,
email: "BRV",
uniqueID: 3,
},
{
  Name: "jOE",
  phoneNumber: 5,
  email: "BRV",
  uniqueID: 3,

},
{
  Name: "blaMKke",
  phoneNumber: 5,
  email: "BRV",
  uniqueID: 3,

}]

var waitList = [{
   Name: "blake",
   phoneNumber: 5,
   email: "BRV",
   uniqueID: 3,

},{
  Name: "jOE",
  phoneNumber: 5,
  email: "BRV",
  uniqueID: 3,

}];
 // {
 //   // Name: "",
 //   // phoneNumber: ,
 //   // email: "",
 //   // uniqueID: ,
 // },
 // {
 //   Name: "",
 //   phoneNumber: ,
 //   email: "",
 //   uniqueID: ,
 // },
 // {
 //   Name: "",
 //   phoneNumber: ,
 //   email: "",
 //   uniqueID: ,
 // }


// var visitorCount = 0;

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function(req, res) {
 res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reservations", function(req, res) {
 res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
 res.json(reservations);
});

// Displays all waitlist
app.get("/api/waitlist", function(req, res) {
 res.json(waitList);
});

// // Displays a single reservation, or returns false

app.get("/api/", function(req, res) {
 res.json(data);
});

app.get("/api/clear", function(req, res) {
 data.reservations.length = 0;
 data.waitlist.length = 0;
 res.json(data);
});
// app.get("/api/reservations/:reservation", function(req, res) {
//   var chosen = req.params.reservations;

//   console.log(chosen);

//   for (var i = 0; i < reservations.length; i++) {
//     if (chosen === reservations[i].routeName) {
//       return res.json(reservations[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function(req, res) {
 // req.body hosts is equal to the JSON post sent from the user
 // This works because of our body-parser middleware
 var newreservation = req.body;


 // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
 newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

 console.log(newreservation);

 reservations.push(newreservation);

 res.json(newreservation);

 // Attempting to send reservation to waitList when reservations are full
 if (data.reservations.length < 3) {
     data.reservations.push(reservations);
 } else {
     data.reservations.push(waitList);
 }
});



// Starts the server to begin listening / Dynamically Assigned or Static
// =============================================================
app.listen(process.env.PORT || PORT, function(){
 console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});