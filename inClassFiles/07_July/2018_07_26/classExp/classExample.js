//requiring http module
var http = require("http")

//creates a server, there is a "request stream" and "result stream"
var server = http.createServer(function(request, result){
    //passing call back function and executed on every request to the server
    console.log("server received a request")
    //writing to our "results stream"
    //result.end("Hello world!")
    result.end(request.url)
});
//makes server listen
server.listen(7000, function(){
    console.log("I'm listening")
});