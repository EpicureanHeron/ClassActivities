// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var command = process.argv[2];
var amount = process.argv[3];

var numArray = []

for(i = 2; i < process.argv.length; i ++) {
    numberToAdd = parseFloat(process.argv[i])
    numArray.push(numberToAdd)
}


//https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly

console.log(numArray = numArray.sort((a, b) => a - b))

