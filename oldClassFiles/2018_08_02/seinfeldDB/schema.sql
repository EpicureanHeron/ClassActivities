DROP DATABASE IF EXISTS seinfeld_db;



CREATE DATABASE seinfeld_db;

USE seinfeld_db;


CREATE TABLE actors(
	 id INTEGER NOT NULL AUTO_INCREMENT,
	 character_name VARCHAR(50) NOT NULL,
	 coolness_points int(50) NOT NULL,
	 attitude VARCHAR(50) NOT NULL,
	 PRIMARY KEY (id)
	);
    
 INSERT INTO actors(character_name, coolness_points, attitude )
VALUES("George", 1, "angry")
	,("Jerry",  6, "meh")
	, ("Kramer", 10, "broasted")
    , ("Elaine", 6, "Cannot dance")
    , ("Soup Nazi", 2, "angry");
    

select * from actors where attitude = 'angry';