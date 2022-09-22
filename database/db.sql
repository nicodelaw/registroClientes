CREATE DATABASE crudnodejsmysql;

USE crudnodejsmysql;

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    telefono VARCHAR(15) NOT NULL
);

CREATE TABLE contacto(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    namec VARCHAR(50) NOT NULL,
    mail VARCHAR(50) NOT NULL,
    phone INT(15),
    messagec VARCHAR(50),
    horaregistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SHOW TABLES;

DESCRIBE customer;
DESCRIBE contacto;

