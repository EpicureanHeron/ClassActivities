const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require("./routes");
var socket = require('socket.io');
var mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
server = app.listen(5000, function(){
    console.log('server is running on port 5000')
});

io = socket(server);


// Use body-parser for handling form submissions

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//test
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/MeatUp";

// Set mongoose to leverage built in JavaScript ES6 Promises

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Define API routes here
 app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
