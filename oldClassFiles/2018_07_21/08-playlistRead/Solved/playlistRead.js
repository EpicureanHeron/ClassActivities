var mysql = require("mysql");

var command =  process.argv[2]



var connection = mysql.createConnection({
  host: "192.168.99.100",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs()
});

//could use switch statement and process argv or just using inqquirier

// switch(expression) {
//   case n:
//       code block
//       break;
//   case n:
//       code block
//       break;
//   default:
//       code block
// }

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
    //deleteRow()
    //updateRow()
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      //mysql package allows res to be used rather than 
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}


// INSERT INTO songs (title, artist, genre)
// VALUES ("Yellow Submarine", "The Beatles", "Classic Rock");


// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {

function insertRow(){
  var posts = {title: "Is This It?", artist: "The Strokes", genre: "rock"}
  var query = connection.query('INSERT INTO songs SET ?', posts, function(err, res) {
    if (err) throw err;
    })
  // connection.end();
  }

function deleteRow() {

  
  var query = connection.query("DELETE FROM songs WHERE id=?", ["5"], function (err, res) {
    if (err) throw err;
    console.log("Number of records deleted: " + res.affectedRows);
  })
  }

function updateRow(){
  var query = connection.query("UPDATE songs SET title=? WHERE artist=?", ["Helter Skelter", "The Beatles"], function (err, res){

    console.log("Number of records updated: "+ res.affectedRows)
  })

}
