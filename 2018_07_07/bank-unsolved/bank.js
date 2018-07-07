var fs = require('fs');
var command = process.argv[2];
var amount = process.argv[3];
switch (command) {
    case "deposit":
        fs.appendFile("bank.txt", ", " + amount, function(err,data) {
            if (err) {
                console.log(err);
            };
        });
        getTotal()
        break;
    case "total":
        getTotal()
        break;
    case "withdraw":
        
        fs.appendFile("bank.txt", ", -" + amount, function(err,data) {
            if (err) {
                console.log(err);
            };
        });
        getTotal()
        break;
    case "lotto":
        fs.appendFile("bank.txt", ", -" + amount, function(err,data) {
            if (err) {
                console.log(err);
            };
            //var randNumber = 10;
            var randNumber = Math.floor((Math.random() * 100));
            if (randNumber == amount) {
                var lottoWin = Math.floor((Math.random() * 100));
                console.log(lottoWin)
                lottoWin = lottoWin * randNumber
                fs.appendFile("bank.txt", ", " + lottoWin, function(err,data) {
                    if (err) {
                        console.log(err);
                    };
            });
        };
    });
    
    getTotal()
    break;
};

function getTotal(){
    var total = 0
        fs.readFile("bank.txt", 'utf8', function(err,data) {
        if (err) {
            console.log(err);
        };
        var dataSplit = data.split(", ")
        for (var i = 0; i < dataSplit.length; i++) {
            total += parseFloat(dataSplit[i]);
        };
            console.log("your current balance is: " + total)
        });
}