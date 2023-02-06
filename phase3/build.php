<?php

$htmls = glob('*.html');
$out = [];

foreach ($htmls as $k => $html) {
    if (strpos($html, '.html') !== false) {
        $foldername = str_replace(".html", '', $html);
        $cmd = sprintf("npx parcel build %s --dist-dir ./build/%s --no-optimize --no-source-maps --public-url ./ 2>&1", $html, $foldername);

        if (isset($argv[1]) && $argv[1] == 'all') {
            exec($cmd, $out);
        } elseif (!isset($argv[1]) && in_array($foldername, ['main-159-192', 'main-159-194', 'main-176-207', 'main-176-208'])) {
            exec($cmd, $out);
        }
    }
}

print_r($out);
