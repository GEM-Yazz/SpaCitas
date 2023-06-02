<?php

use Timber\Timber;

Routes::map('auth', function($routeParams) {
    wp_redirect('https://citas.site/wp-admin/admin.php?page=examples&code='.$_GET['code']);
    exit;
    $params = [
        'title' => 'Example',
        'route' => $routeParams,
        'view'  => 'example',
    ];

    Routes::load('app.php', $params, "", 200);
});
