drop database chirpy;

CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE `chirps` (

id INTEGER NOT NULL AUTO_INCREMENT,
	 author VARCHAR(50) NOT NULL,
	 chirp VARCHAR(50) NOT NULL,
     time_created DATETIME NOT NULL,
	 PRIMARY KEY (id)
);

select * from chirps;
INSERT INTO chirps (author, chirp)
VALUES("turd",  "tweet");

Using the app skeleton provided to you:
Create a MySQL database named 'chirpy' with a 'chirps' table to hold your data.
Your 'chirp' table should include a field for id, author, chirp, and time created.
Modify the connection.js file to create a connection to your database.
Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.
Modify the chirps.js file so that the page interacts with the database.