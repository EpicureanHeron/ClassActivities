var operator = process.argv[2]


if(operator !== "algebra"){

var firstArg = parseFloat(process.argv[3])
var secondArg = parseFloat(process.argv[4])

    if(operator === "subtract"){
        var result = firstArg - secondArg
        console.log(result)
    }
    else if (operator === "add") {
        var result = firstArg + secondArg
        console.log(result)
    }
    else if (operator === "multiply") {
        var result = firstArg * secondArg
        console.log(result)
    }
    else if (operator === "divide") {
        var result = firstArg / secondArg
        console.log(result)
    }
    else if (operator === "exp") {
        var result = Math.pow(firstArg, secondArg)
        console.log(result)
    }
    else if (operator === "remainder"){
        var result = firstArg%secondArg
        console.log(result)
    }


}
else if(operator === "algebra"){
    var firstArg = process.argv[3]

    for(i = 0; i < firstArg.length; i ++){

        console.log(firstArg.charAt(i))

        if (firstArg.charAt(i) === "x"){
            console.log("ID'd X")
        }
        if (firstArg.charAt(i)=== "="){
            console.log("ID'd = ")
        }
    }
}