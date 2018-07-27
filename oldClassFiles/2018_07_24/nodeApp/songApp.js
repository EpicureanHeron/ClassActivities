var inquirer = require("inquirer")
var mysql = require("mysql")




var connection = mysql.createConnection({
    host: "192.168.99.100",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "top_songs"
});

var choiceList = ["Search by artist", "Search for artists who appear more than once", "Specify Search Rank Range", "Search by song", "Search by artist and get album and song"]


choice()

function choice() {
    inquirer.prompt([
        {
            name: "searchChoice",
            message: "Input the ID for the product  you wish to purchase:  ",
            type: "list",
            choices: choiceList

        },

    ]).then(function (answers) {
        if (answers) {
            switch (answers.searchChoice) {
                case ("Search by artist"):
                    searchArtist()
                    break;
                case ("Search for artists who appear more than once"):
                    multiHitArtist()
                    break;
                case ("Specify Search Rank Range"):
                    rankRange()
                    break;
                case ("Search by song"):
                    searchSong()
                    break;
                case ("Search by artist and get album and song"):
                    albumAndSong()
                    break;
            }
        }
    })
}


// DROP DATABASE IF EXISTS top_songs;

// CREATE DATABASE top_songs;

// USE top_songs;

// CREATE TABLE ranked_songs(
// 	 rank INTEGER(10) NOT NULL,
// 	 artist VARCHAR(50) NOT NULL,
// 	 title VARCHAR(50) NOT NULL,
//      release_year INTEGER(10) NOT NULL, 
// 	 raw_total DECIMAL(10,4) NOT NULL,
// 	 raw_usa DECIMAL(10,4) NOT NULL,
//      raw_uk DECIMAL(10,4) NOT NULL,
//      raw_eur DECIMAL(10,4) NOT NULL,
//      raw_rest_of_world DECIMAL(10,4) NOT NULL
// 	);




function searchArtist() {


    inquirer.prompt([
        {
            name: "artist",
            message: "Which artist do you wish to search?  ",
            type: "input"

        },

    ]).then(function (answers) {
        if (answers) {
            var query = connection.query("SELECT * FROM ranked_songs WHERE artist=?", [answers.artist], function (err, res) {
                res.forEach(element => {
                    console.log("--------------------------------------------------------------------------------------------------")
                    console.log("Rank " + element.rank + ", Song Name: " + element.title + ", release year: " + element.release_year)
 
                    
                    
                });
            })
        }
    })

}

function multiHitArtist() {
    var query = connection.query("SELECT artist, COUNT(*) c FROM ranked_songs GROUP BY artist HAVING c > 1", function (err, res) {
        res.forEach(element => {
            console.log(element.artist)
        })
    
  })

}

function searchSong() {


    inquirer.prompt([
        {
            name: "song",
            message: "Which song do you wish to search?",
            type: "input"

        },

    ]).then(function (answers) {
        if (answers) {
            var query = connection.query("SELECT * FROM ranked_songs WHERE title=?", [answers.song], function (err, res) {
                res.forEach(element => {

                    console.log("--------------------------------------------------------------------------------------------------")

                    console.log("Rank " + element.rank + ", Artist: " + element.artist + ", release year: " + element.release_year)

                    
                });
            })
        }
    })

}

function rankRange(){

    inquirer.prompt([
        {
            name: "range1",
            message: "Range from",
            type: "input",
            validate: function (value) {

                if (isNaN(value) === false && value <= 5000 && value > 0) {
                    return true
                }
                return false
            }

        },

        {
            name: "range2",
            message: "Range to",
            type: "input",
            validate: function (value) {

                if (isNaN(value) === false && value <= 5000 && value > 0) {
                    return true
                }
                return false
            }

        }

    ]).then(function (answers) {

        if (answers) {
            var query = connection.query("SELECT * FROM ranked_songs WHERE rank BETWEEN ? AND ?", [parseInt(answers.range1), parseInt(answers.range2)], function (err, res) {
                if (err) throw err;
                res.forEach(element => {

                    console.log("--------------------------------------------------------------------------------------------------")

                    console.log("Rank " + element.rank + ", Artist: " + element.artist + ", song title " + element.title +",  release year: " + element.release_year)

                    
                });
            })
        }



    })

}
function albumAndSong(){

    inquirer.prompt([
        {
            name: "artist",
            message: "name an artist",
            type: "input",
    

        },

    ]).then(function (answers) {
        //the query they used in the solved version

        //INNER JOIN and ORDER By

        // var query = "SELECT top_albums.year, top_albums.album, top_albums.position, top5000.song, top5000.artist ";
        // query += "FROM top_albums INNER JOIN top5000 ON (top_albums.artist = top5000.artist AND top_albums.year ";
        // query += "= top5000.year) WHERE (top_albums.artist = ? AND top5000.artist = ?) ORDER BY top_albums.year ";



        var select = "SELECT a.release_year, a.artist, a.album, s.title as song_title "
        var from = "FROM ranked_songs s "
        var join = "LEFT JOIN ranked_albums a ON a.artist = s.artist and s.release_year = a.release_year "
        var where = "where a.artist=?"

        var queryToPass = select + from + join + where

        var query = connection.query(queryToPass, [answers.artist], function (err, res) {
            if(err) throw err;
            res.forEach(element => {
                console.log("Artist: " + element.artist + " | Song Title: " + element.song_title +" | Album: " + element.album + " |  release year: " + element.release_year)
            });





    })

    })
}
