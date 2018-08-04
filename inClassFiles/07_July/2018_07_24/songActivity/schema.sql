DROP DATABASE IF EXISTS top_songs;

CREATE DATABASE top_songs;

USE top_songs;

CREATE TABLE ranked_songs(
	 rank INTEGER(10) NOT NULL,
	 artist VARCHAR(50) NOT NULL,
	 title VARCHAR(50) NOT NULL,
     release_year INTEGER(10) NOT NULL, 
	 raw_total DECIMAL(10,4) NOT NULL,
	 raw_usa DECIMAL(10,4) NOT NULL,
     raw_uk DECIMAL(10,4) NOT NULL,
     raw_eur DECIMAL(10,4) NOT NULL,
     raw_rest_of_world DECIMAL(10,4) NOT NULL
	);

CREATE TABLE ranked_albums(
	 rank INTEGER(10) NOT NULL,
	 artist VARCHAR(50) NOT NULL,
	 album VARCHAR(50) NOT NULL,
     release_year INTEGER(10) NOT NULL, 
	 raw_total DECIMAL(10,4) NOT NULL,
	 raw_usa DECIMAL(10,4) NOT NULL,
     raw_uk DECIMAL(10,4) NOT NULL,
     raw_eur DECIMAL(10,4) NOT NULL,
     raw_rest_of_world DECIMAL(10,4) NOT NULL
     );
