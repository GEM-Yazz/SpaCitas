<?php

$database::statement('CREATE TABLE IF NOT EXISTS wp_user_calendars(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    code VARCHAR(255) NOT NULL,

    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id)
)');
