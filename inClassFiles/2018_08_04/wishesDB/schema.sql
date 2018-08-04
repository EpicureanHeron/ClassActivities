CREATE DATABASE wishes_db;
USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('More wishes.');
INSERT INTO wishes (wish) VALUES ('Robot butler');
INSERT INTO wishes (wish) VALUES ('New computer.');
