// Instructions

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

var http = require("http")
var $ = require("jquery");

var niceList = ["sweet butt", "good shoes", "rad idea, bro", "You smart", "you smell good"]
var meanList = ["you look like your parents", "good shoes...", "your hair is...fine", "you actually smell like shit"]
//creates a server, there is a "request stream" and "result stream"
var server1 = http.createServer(function(request, result){
    //passing call back function and executed on every request to the server
    console.log("server1 received a request")
    var random1 = Math.floor(Math.random() * Math.floor(niceList.length));
    //writing to our "results stream"
    //result.end("Hello world!")


  result.end(niceList[random1])

});
var server2 = http.createServer(function(request, result){
    
    console.log("server2 received a request")

    var random2 = Math.floor(Math.random() * Math.floor(meanList.length));

   // result.end(meanList[random2])



    result.end(meanList[random2])
});
//makes server listen
server1.listen(7000, function(){
    console.log("I'm listening, I'm server 1")
});

server2.listen(7500, function(){
    console.log("I'm listening, I'm server 2")
});