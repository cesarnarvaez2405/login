CREATE DATABASE firstapi

CREATE TABLE users(
    id serial PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
('JOE', 'joe@gmail.com'),
('JUANA', 'juana@gmail.com');
