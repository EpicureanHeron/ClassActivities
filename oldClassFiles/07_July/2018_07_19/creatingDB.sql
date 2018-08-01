DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;

-- SQL from Louis for removing rows ? 
SET SQL_SAFE_UPDATES = 0;

USE favorite_db;

-- For the table favorite_foods...

-- Create the column “food” which can take in a 50 character string and cannot be NULL
-- Create the column “score” which can take in an integer

CREATE TABLE favorite_foods( 
    id INTEGER NOT NULL AUTO_INCREMENT,
	food VARCHAR(50) NOT NULL,
    score INTEGER(100),
    PRIMARY KEY (id)
    );
    
    
-- Create the column “song” which can take in a 100 character string and cannot be NULL
-- Create the column “artist” which can take in a 50 character string
-- Create the column “score” which can take in an integer
-- For the table favorite_movies...

CREATE TABLE favorite_songs(
    id INTEGER NOT NULL AUTO_INCREMENT,
	song VARCHAR(100) NOT NULL,
    artist VARCHAR(50) NOT NULL,
    score INTEGER(100),
    PRIMARY KEY (id)
    );

    

-- Create the column “film” which can take in a string and cannot be NULL
-- Create the column “five_times” which can take in a boolean
-- create the column “score” which can take in an integer
-- BONUS: Go online and look into how one might go about adding data into a table.
    
 CREATE TABLE favorite_movies(
     -- this is a way to have the database assign the ID based on the last ID
    id INTEGER NOT NULL AUTO_INCREMENT,
	film VARCHAR(100) NOT NULL,
    -- the default always creates it as false unless the specified as other when entered
    five_times BOOLEAN DEFAULT false,
    score INTEGER(100),
    -- sets the PRIMARY KEY which is to say, the best way to get data
    PRIMARY KEY (id)
    );
    
INSERT INTO favorite_movies(film, score)
VALUES("Star Wars", 88); 

INSERT INTO favorite_movies(film, score)
VALUES("Predator", 80) ;

INSERT INTO favorite_movies(film, score)
VALUES("Star Trek: Wrath of Khan", 75) ;

INSERT INTO favorite_songs(song, artist, score)
VALUES("Four Tet", "Breath Me", 50) ;

INSERT INTO favorite_songs(song, artist, score)
VALUES("Radiohead", "The National Anthem", 60) ;

INSERT INTO favorite_songs(song, artist, score)
VALUES("Gorillaz", "November Has Come", 80) ;

INSERT INTO favorite_foods(food, score)
VALUES("mashed potatoes", 70) ;

INSERT INTO favorite_foods(food, score)
VALUES("fried chicken sandwich",  95) ;

select * from favorite_movies;

select * from favorite_foods;

select * from favorite_songs;


-- Instructions

-- It is time to add some data into FavoriteDB! The data that you add should be unique to you and you should try to test 
-- your skills in not only adding new data, but also attempt to update old data as well!

-- Try to add at least three rows of data to each table.

-- BONUS: Look into how you you might go about creating a column that can hold a default value within it and how default values work when creating new rows.

-- BONUS: Look into how you might go about creating a column with a default value that automatically go up with each new row

-- BONUS: Look into the concept of making a column the “primary key”

-- ULTRA BONUS: Try to create a column called “id” in one of your tables that can contain an integer, is
--  the primary key for the table, cannot be NULL, and automatically increments with each new row added.



-- Instructions

-- Make a new database called “programming_db” and switch into it for this activity

-- Create a table called “programming_languages” which includes a primary key named “id” which will automatically increment which each new
-- row created, a string column called “languages,” and a numeric column called “rating.”

-- Insert some data into the table and then modify the data using the id column.

-- BONUS: Study up on how to add columns to a table and then create a boolean column called “mastered” which has a default value of true.

-- BONUS: Start looking into the concept of joins in SQL


CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
    id INTEGER NOT NULL AUTO_INCREMENT,
	languages VARCHAR(100) NOT NULL,
    rating INTEGER(100) NOT NULL,
    PRIMARY KEY (id)
    );



INSERT INTO programming_languages(languages, rating)
VALUES("Javascript",  95),("HTML5",  5), ("CSS",  8),("Python",  100);

select * from programming_languages;

UPDATE programming_languages
set rating = 80
where id = 1;

CREATE TABLE programming_languages(
	
	languages VARCHAR(100) NOT NULL,
    rating INTEGER(100) NOT NULL 
    );
