-- users.sql

USE library_management_system;

CREATE TABLE IF NOT EXISTS users (
    user_ID VARCHAR(7),
    full_name VARCHAR(255),
    cpf VARCHAR(11),
    phone_number VARCHAR(14),
    birth_date DATE,
    email VARCHAR(255)
);
