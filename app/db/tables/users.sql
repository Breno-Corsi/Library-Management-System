-- users.sql

USE library_management_system;

CREATE TABLE IF NOT EXISTS users (
    user_ID VARCHAR(7) UNIQUE,
    full_name VARCHAR(255),
    cpf VARCHAR(11) UNIQUE,
    phone_number VARCHAR(14) UNIQUE,
    birth_date DATE,
    email VARCHAR(255) UNIQUE
);
