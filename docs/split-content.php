<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'split-content';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'lp-split-cta-thumbnail',
            'split-text-w-bg',
            'split-text-wo-bg',
            'split-video-text',
            'split-width-hero',
            'split-width-hero-carousel'
        ],
        'iframe' => [
            'lp-split-cta-thumbnail' => [
                'width' => '100%',
                'height' => '500px'
            ],
            'split-text-w-bg' => [
                'width' => '100%',
                'height' => '500px'
            ],
            'split-text-wo-bg' => [
                'width' => '100%',
                'height' => '500px'
            ],
            'split-video-text' => [
                'width' => '100%',
                'height' => '500px'
            ],
            'split-width-hero' => [
                'width' => '100%',
                'height' => '500px'
            ],
            'split-width-hero-carousel' => [
                'width' => '100%',
                'height' => '500px'
            ],
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';