log(name); // output: ? undefined

var tinyize = function(name) {
  log(name); // output: ? undefined 

  log(myName); // output: ? undefined
  var myName = "Tiny " + name + "!"; 
  log(myName); // output: error ? 

  return myName;
};

var name = tinyize("Rick");
log(name); // output: ? "Tiny Rick!"
log(myName); // output: ? ref error

log(i); // output: ? undefined
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    log(i); // output: ? 1-100
  }, 100);
}
log(i); // output: ? undefined

// helper function to log current line number and the passed in string
// e.g. "Line 24: Hello World"
function log(string) {
  var callerLine = new Error().stack.split("\n")[2];
  var lineNumber = callerLine.match(/:(\d+):\d+\)/)[1];
  console.log("Line " + lineNumber + ": " + string);
}
