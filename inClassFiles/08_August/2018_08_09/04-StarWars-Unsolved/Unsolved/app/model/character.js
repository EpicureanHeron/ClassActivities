var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");


// Creates a "Chirp" model that matches up with DB
var StarWars = sequelize.define("StarWars_characters", {
    
    id: {  type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    routeName:  { type: Sequelize.STRING, allowNull: false},
    name:  { type: Sequelize.STRING, allowNull: false},
    role:  { type: Sequelize.STRING, allowNull: false},
    age:  { type: Sequelize.INTEGER, allowNull: false},
    forcePoints: { type: Sequelize.INTEGER, allowNull: false}

});


  
  // Syncs with DB
  StarWars.sync();




//   CREATE TABLE `allcharacters` (
// 	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
// 	`routeName` VARCHAR( 255) NOT NULL,
// 	`name` VARCHAR( 255 ) NOT NULL,
// 	`role` VARCHAR( 255 ) NOT NULL,
// 	`age` Int(11) NOT NULL,
// 	`forcePoints` Int(11) NOT NULL,
// 	/* Set ID as primary key */
// 	PRIMARY KEY ( `id` )
// );
  
  // Makes the Chirp Model available for other files (will also create a table)
  module.exports = StarWars;