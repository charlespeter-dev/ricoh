<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'button';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'button-cta1',
            'button-cta2',
            'button-std'
        ],
        'iframe-desktop' => [
            'button-cta1' => [
                'width' => '100%',
                'height' => '100px'
            ],
            'button-cta2' => [
                'width' => '100%',
                'height' => '100px'
            ],
            'button-std' => [
                'width' => '100%',
                'height' => '100px'
            ],
        ],
        'iframe-mobile' => [
            'button-cta1' => [
                'width' => '100%',
                'height' => '100px'
            ],
            'button-cta2' => [
                'width' => '100%',
                'height' => '100px'
            ],
            'button-std' => [
                'width' => '100%',
                'height' => '100px'
            ],
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';