CREATE DATABASE firstapi

CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

CREATE TABLE login(
    id serial PRIMARY KEY,
    username VARCHAR(40),
    password VARCHAR(40)
);

INSERT INTO users (name, email) VALUES
('JOE', 'joe@gmail.com'),
('JUANA', 'juana@gmail.com');

INSERT INTO login (username, password) VALUES
('superadmin', 'admin'),
('cesar','admin');
