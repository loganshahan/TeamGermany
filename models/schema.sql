DROP DATABASE IF EXISTS FourGer;
CREATE DATABASE FourGer;
USE FourGer;
CREATE TABLE todos
(
	noteID int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    body varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
	PRIMARY KEY (noteID),
    FOREIGN KEY (id) REFERENCES User(id) ON DELETE CASCADE ON UPDATE CASCADE
);







DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

