// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
const Sequelize = require('sequelize');
const sequelize = new Sequelize('StarWars_DB', 'root', '', {
  host: '192.168.99.100',
  port: 3306,
  dialect: 'mysql',


  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

 
});


// Exporting our connection
module.exports = sequelize;


