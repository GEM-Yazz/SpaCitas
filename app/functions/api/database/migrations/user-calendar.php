<?php

$database::statement('CREATE TABLE IF NOT EXISTS wp_user_calendars(
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    code TEXT NULL,
    refresh_token TEXT NULL,

    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id)
)');
