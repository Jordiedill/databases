CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int auto_increment not null,
  userid int not null,
  text varchar(160) not null,
  room varchar(20) not null,
  primary key (ID)
);

CREATE TABLE users (
  id int auto_increment not null,
  username varchar(20) not null,
  primary key (ID)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

