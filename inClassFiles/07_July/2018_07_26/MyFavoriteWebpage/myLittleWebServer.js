// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);
// Create our server
function handleRequest(req, res) {
  //console.log(res)
  //console.log(req)
  // Capture the url the request is made to

  console.log(req.url)
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayPage(path, req, res, "/index.html");

  case "/movies":
    return displayPage(path, req, res, "/movies.html");

  case "/frameworks":
    return displayPage(path, req, res, "/frameworks.html");

  case "/foods":
    return displayPage(path, req, res, "/food.html");
//added this case so that CSS works
  case "/style.css":
    return displayPage(path, req, res, "/style.css");

  default:
    return displayPage(path, req, res, "/404.html");
  }
}

function displayPage(path, req, res, webpage){

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + webpage, function(err, data) {

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
