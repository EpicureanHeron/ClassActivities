var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

function printMatch(arr, random){
    console.log()
    for(i=0;i<arr.length; i++){
        if( arr[i] === random){
            console.log('matched')
            console.log(random, i)
        } 
   
    }
    ;
}

printMatch(stuff, random_value)