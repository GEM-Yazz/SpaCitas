<?php

$database::statement('CREATE TABLE IF NOT EXISTS wp_citas(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    servicio VARCHAR(50) NOT NULL,
    sucursal VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    reserva VARCHAR(100) NOT NULL,
    hora VARCHAR(100) NOT NULL,

    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id)
)');