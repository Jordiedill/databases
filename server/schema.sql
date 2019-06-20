CREATE DATABASE chat;

USE chat;

CREATE TABLE chat (
  id int auto_increment primary key,
   message varchar(160),
   room varchar(20),
   name varchar(20)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

