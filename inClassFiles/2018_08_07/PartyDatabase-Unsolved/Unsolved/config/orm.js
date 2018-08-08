var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
 
  selectWhere: function(colname, tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT ?? FROM ?? WHERE ?? = ?";
    connection.query(queryString, [colname, tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString =
      "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(
      queryString,
      [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  },
  rightJoin: function(t1, t2, col1, col2){
    //select * from clients right join parties on parties.client_id = clients.id;

    var queryString = "select * from ?? right join ?? on ??.?? = ??.??;";

    connection.query(
      queryString,
      [t1,t2,t2,col2,t1,col1],
      function(err, result){
        if(err) throw err;
        console.log(result)
      }
    )
  }



  
};

module.exports = orm;
