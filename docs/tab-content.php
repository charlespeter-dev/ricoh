<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'tab-content';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'tab-nav-2-columns-content'
        ],
        'iframe' => [
            'tab-nav-2-columns-content' => [
                'width' => '100%',
                'height' => '500px'
            ]
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';