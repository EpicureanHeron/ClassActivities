// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request = require("request")

var longerMovieName;

var movieNameArr = [];


// Grab or assemble the movie name and store it in a variable called "movieName"
//var movieName = process.argv[2]
// ...
//COULD HAVE STARTED i at 2 instead
for (i  = 0; i < process.argv.length; i ++ ){
    if(i !== 0 && i !== 1){
        
        movieNameArr.push(process.argv[i])
    }
}
console.log(movieNameArr)
longerMovieName = movieNameArr.split(' ').join('+');


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + longerMovieName + "&y=&plot=short&apikey=trilogy";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
// ...
request(queryUrl, function(error, response, body){

    if(!error && response.statusCode === 200) {
       var parsedBody = JSON.parse(body)
       console.log(parsedBody.Plot)
    }
})
// If the request is successful
// ...

// Then log the Release Year for the movie

// ...
