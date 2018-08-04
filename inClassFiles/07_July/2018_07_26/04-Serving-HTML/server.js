// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);
// Create our server
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayRoot(path, req, res);

  case "/portfolio":
    return displayPortfolio(path, req, res);

  case "/contact":
    return displayContact(path, req, res);

  default:
    return display404(path, req, res);
  }
}

function displayRoot(path, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/index.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

function displayContact(path, req, res){
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/contact.html", function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}


// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
