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

var options = ["POST AN ITEM", "BID ON AN ITEM", "SHOW DATABASE INFO"]

inquirer.prompt([
    {
        name: "command",
        message: "Chose a command: ",
        type: "list",
        choices: options


    }
]).then(function (answers) {

    switch (answers.command) {
        case "POST AN ITEM":
            post()
            break;
        case "BID ON AN ITEM":
            bid()
            break;
        case "SHOW DATABASE INFO":
            read()
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

function bid() {
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

        if (answers) {

            //inits ID
            var id;

            //grabs the ID for the value that was selected 
            for (i = 0; i < itemList.length; i++) {
                if (itemList[i] === answers.item) {
                    //autoincrement starts at 1, whereas this is passing the index ID
                    id = i + 1

                }

            }
            //grabs the highest bid from the ID of the selected
            var query = connection.query("SELECT high_bid FROM transactions where id=?", [id], function (err, res) {
                if (err) throw err;
                //if the bid of the user is higher 
                if (answers.value > res[0].high_bid) {
                    console.log("You are the highest bidder!")
                    //updates the row 
                    var query = connection.query("UPDATE transactions SET high_bid=? WHERE id=?", [answers.value, id], function (err, res) {
                        if (err) throw err;
                    })
                }
                else {
                    console.log("You still are outbid")
                }

            })

        }


    })
    // connection.end();

}

function read() {
    var query = connection.query("SELECT * FROM transactions", function (err, res) {
        res.forEach(element => {
            console.log(element)
        });
    })
}