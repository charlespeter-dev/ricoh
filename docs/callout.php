<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'callout';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'callout-fraction-center',
            'callout-percentage-1-column',
            'callout-percentage-2-columns',
            'callout-percentage-center',
            'callout-percentage-reverse',
            'lp-callout-percentage-single',
            'lp-callout-quote',
            'lp-callout-quote-w-percentage',
            'lp-callout-general-w-bg'
        ],
        'iframe' => [
            'callout-fraction-center' => [
                'width' => '100%',
                'height' => '260px'
            ],
            'callout-percentage-1-column' => [
                'width' => '100%',
                'height' => '260px'
            ],
            'callout-percentage-2-columns' => [
                'width' => '100%',
                'height' => '400px'
            ],
            'callout-percentage-center' => [
                'width' => '100%',
                'height' => '260px'
            ],
            'callout-percentage-reverse' => [
                'width' => '100%',
                'height' => '260px'
            ],
            'lp-callout-percentage-single' => [
                'width' => '100%',
                'height' => '320px'
            ],
            'lp-callout-quote' => [
                'width' => '100%',
                'height' => '260px'
            ],
            'lp-callout-quote-w-percentage' => [
                'width' => '100%',
                'height' => '400px'
            ],
            'lp-callout-general-w-bg' => [
                'width' => '100%',
                'height' => '100px'
            ],
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';