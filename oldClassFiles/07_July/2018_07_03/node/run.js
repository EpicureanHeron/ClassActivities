var importedBands = require("./band.js");

console.log(importedBands)

//THIS WORKS IN JAVASCRIPT, BUT LOOPING OVER KEY VALUES IS DIFFERENT IN OTHER LANGUAGES
for( var key in importedBands.bands){
    console.log("A "+ key + " band is "+ importedBands.bands[key])
}

// var keys = Objects.keys(importedBands)

// console.log(keys)