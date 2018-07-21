var inquirer = require("inquirer")
var mysql = require("mysql")

// var itemList = ["fljkd", "dl;fkajl;"]

var itemList = []

var connection = mysql.createConnection({
    host: "192.168.99.100",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "great_bayDB"
});

getItems()

var options = ["POST AN ITEM", "BID ON AN ITEM"]

inquirer.prompt([
    {
        name: "command",
        message: "Guess a letter: ",
        type: "list",
        choices: options


    }
]).then(function (answers) {

    switch (answers.command) {
        case "POST AN ITEM":
            post()
            break;
        case "BID ON AN ITEM":
            showItems()
            break;
    }
});

// id INT NOT NULL AUTO_INCREMENT,
//  item VARCHAR(45) NULL,
//  high_bid INTEGER(45) NULL,

function post() {
    inquirer.prompt([
        {
            name: "item",
            message: "What item: ",
            type: "input"


        },
        {
            name: "value",
            message: "How much? ",
            type: "input"


        }
    ]).then(function (answers) {
        if (answers) {
            var posts = { item: answers.item, high_bid: answers.value }
            var query = connection.query('INSERT INTO transactions SET ?', posts, function (err, res) {
                 if (err) throw err;
             })
            // connection.end();
        }



    });
}
//alt shift F formats
function getItems() {

    var query = connection.query("SELECT item FROM transactions ", function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
            itemList.push(res[i].item)
        }
        

    })

}

function showItems() {
    inquirer.prompt([
        {
            name: "item",
            message: "What would you like bid on ",
            type: "list",
            choices: itemList
        },
        {
            name: "value",
            message: "How much? ",
            type: "input"
        }

    ]).then(function (answers) {
        if(answers){
            //compare values
            
        }

 
    })
    // connection.end();

}