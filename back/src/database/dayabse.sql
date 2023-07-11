CREATE DATABASE apiCesar

CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(40),
    email TEXT,
    password char(100)
);

CREATE TABLE login(
    id serial PRIMARY KEY,
    username VARCHAR(40),
    password VARCHAR(40)
);

INSERT INTO users (name, email, password) VALUES
('JOE', 'joe@gmail.com', '1234Cesar'),
('JUANA', 'juana@gmail.com','241520Cesar');

INSERT INTO login (username, password) VALUES
('superadmin', 'admin'),
('cesar','admin');
