<?php

function getContextVariables($context = []) {
    $staticDir  = (ENV['APP_ENV'] == 'development') ? '/admin/temp/' : '/admin';
    $context    = array_merge($context, [
        'site'      => get_site_url(),
        'nonce'     => wp_create_nonce( 'wp_rest' ),
        'api'       => get_rest_url() . "custom/v1",
        'assets'    => get_template_directory_uri() . "/static" . $staticDir,
        'vertion'   => ( require get_theme_file_path('config/base.php') )['vertion'],
        'user_id'   => get_current_user_id(),
    ]);

    return $context;
}

