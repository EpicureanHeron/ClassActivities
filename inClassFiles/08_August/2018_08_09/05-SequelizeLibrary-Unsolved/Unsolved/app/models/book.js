// Dependencies
// =============================================================

// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER

// Sync model with DB

// Export the book model for other files to use
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


// Creates a "Chirp" model that matches up with DB
var books = sequelize.define("books", {
    
   
    title:  { type: Sequelize.STRING, allowNull: false},
    author:  { type: Sequelize.STRING, allowNull: false},
    genre:  { type: Sequelize.STRING, allowNull: false},
    pages:  { type: Sequelize.INTEGER, allowNull: false}
});


  
  // Syncs with DB
  books.sync();

  module.exports = books;