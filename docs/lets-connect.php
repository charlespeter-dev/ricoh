<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'lets-connect';

$comp_meta = [
    $SLUG => [
        'label' => "Let's Connect",
        'build' => [
            'lets-connect',
            'lp-lets-connect'
        ],
        'iframe-desktop' => [
            'lets-connect' => [
                'width' => '100%',
                'height' => '400px'
            ],
            'lp-lets-connect' => [
                'width' => '100%',
                'height' => '500px'
            ]
        ],
        'iframe-mobile' => [
            'lets-connect' => [
                'width' => '100%',
                'height' => '600px'
            ],
            'lp-lets-connect' => [
                'width' => '100%',
                'height' => '520px'
            ]
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';