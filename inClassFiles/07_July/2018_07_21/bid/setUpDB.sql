CREATE DATABASE great_bayDB;

USE great_bayDB;

CREATE TABLE transactions(
 id INT NOT NULL AUTO_INCREMENT,
 item VARCHAR(45) NULL,
 high_bid INTEGER(45) NULL,
 PRIMARY KEY (id)
);