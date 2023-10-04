<?php

require_once 'functions.php';
$basename = str_replace('.php', '', basename(__FILE__));
$DB_FILE = $basename . '.serialize.php';
$BUILD_PATH = sprintf('%s/phase2/src/build/', dirname(dirname(__FILE__)));
$SLUG = 'table-quick-facts';

$comp_meta = [
    $SLUG => [
        'label' => ucwords($SLUG),
        'build' => [
            'table-quick-facts'
        ],
        'iframe-desktop' => [
            'table-quick-facts' => [
                'width' => '100%',
                'height' => '830px'
            ]
        ],
        'iframe-mobile' => [
            'table-quick-facts' => [
                'width' => '100%',
                'height' => '1930px'
            ]
        ]
    ],
];

$components = get_serialized_component($comp_meta, $DB_FILE, $BUILD_PATH);
$components = $components[$SLUG];
require_once 'base.php';