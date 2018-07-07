var argument1 = parseFloat(process.argv[2]);

var argument2 = parseFloat(process.argv[3]);



if (argument1 === argument2){
    console.log("The agruments have the same value")
}
else {
    console.log("The agruments are different")
}

if ((argument1 % 7 === 0) && (argument2 % 7 === 0)) {
    console.log("both multiples of  7")
}
else {
    console.log("both are not a multiple of 7")
}


