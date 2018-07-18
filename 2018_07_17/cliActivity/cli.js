// Write code here to parse command line arguments and store them into variables
// Add code to print whether the user is searching for an actor or tv show, along with the name of the actor or tv show they are searching for

var TV = require("./tv.js")

//THIS IS WHAT I WAS MISSING IN CLASS,  CREATING THIS OBJECT FROM CONSTRUCTOR
var tv = new TV();

var command = process.argv[2]

var keywordsArr = []
for(i=3; i < process.argv.length; i ++){
    keywordsArr.push(process.argv[i])
}
//nabil did this to capture all the parameters after the command rather than the for loop
//var nabilsWay = process.argv.slice(3).join(" ")

switch(command) {
    case("show"):
        var show = keywordsArr.join("+")
        tv.findShow(show)
        break;

    case("actor"):
        logItOut(command, nabilsWay)
        break;
    default:
        console.log("I'm sorry, I didn't understand that. Please try again.")
}

function logItOut(cliCommand, paramArr){
    console.log(cliCommand)
    console.log(paramArr.join("+"))
}
// function getTV()
