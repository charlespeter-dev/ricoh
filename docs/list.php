<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'list';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'list-icon-mirror',
            'lp-mega-list',
            'lp-mega-list-unordered',
            'lp-split-list-icon'
        ],
        'iframe-desktop' => [
            'list-icon-mirror' => [
                'width' => '100%',
                'height' => '680px'
            ],
            'lp-mega-list' => [
                'width' => '100%',
                'height' => '800px'
            ],
            'lp-mega-list-unordered' => [
                'width' => '100%',
                'height' => '800px'
            ],
            'lp-split-list-icon' => [
                'width' => '100%',
                'height' => '450px'
            ],
        ],
        'iframe-mobile' => [
            'list-icon-mirror' => [
                'width' => '100%',
                'height' => '1880px'
            ],
            'lp-mega-list' => [
                'width' => '100%',
                'height' => '800px'
            ],
            'lp-mega-list-unordered' => [
                'width' => '100%',
                'height' => '800px'
            ],
            'lp-split-list-icon' => [
                'width' => '100%',
                'height' => '850px'
            ],
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';