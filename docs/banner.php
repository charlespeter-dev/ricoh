<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'banner';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'banner',
            'lp-banner',
            'lp-banner-cta',
            'lp-banner-cisco',
            'lp-banner-docuware'
        ],
        'iframe-desktop' => [
            'banner' => [
                'width' => '100%',
                'height' => '400px'
            ],
            'lp-banner' => [
                'width' => '100%',
                'height' => '300px'
            ],
            'lp-banner-cta' => [
                'width' => '100%',
                'height' => '300px'
            ],
            'lp-banner-cisco' => [
                'width' => '100%',
                'height' => '400px'
            ],
            'lp-banner-docuware' => [
                'width' => '100%',
                'height' => '400px'
            ]
        ],
        'iframe-mobile' => [
            'banner' => [
                'width' => '100%',
                'height' => '510px'
            ],
            'lp-banner' => [
                'width' => '100%',
                'height' => '700px'
            ],
            'lp-banner-cta' => [
                'width' => '100%',
                'height' => '760px'
            ],
            'lp-banner-cisco' => [
                'width' => '100%',
                'height' => '850px'
            ],
            'lp-banner-docuware' => [
                'width' => '100%',
                'height' => '850px'
            ]
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';