<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'card';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'card-3-columns',
            'card-partner',
            'card-partner-2-columns',
            'card-partner-carousel',
            'card-why-ricoh',
            'lp-card-3-columns'
        ],
        'iframe-desktop' => [
            'card-3-columns' => [
                'width' => '100%',
                'height' => '700px'
            ],
            'card-partner' => [
                'width' => '100%',
                'height' => '550px'
            ],
            'card-partner-2-columns' => [
                'width' => '100%',
                'height' => '780px'
            ],
            'card-partner-carousel' => [
                'width' => '100%',
                'height' => '180px'
            ],
            'card-why-ricoh' => [
                'width' => '100%',
                'height' => '750px'
            ],
            'lp-card-3-columns' => [
                'width' => '100%',
                'height' => '780px'
            ],
        ],
        'iframe-mobile' => [
            'card-3-columns' => [
                'width' => '100%',
                'height' => '3700px'
            ],
            'card-partner' => [
                'width' => '100%',
                'height' => '1100px'
            ],
            'card-partner-2-columns' => [
                'width' => '100%',
                'height' => '1100px'
            ],
            'card-partner-carousel' => [
                'width' => '100%',
                'height' => '200px'
            ],
            'card-why-ricoh' => [
                'width' => '100%',
                'height' => '1630px'
            ],
            'lp-card-3-columns' => [
                'width' => '100%',
                'height' => '1980px'
            ],
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';