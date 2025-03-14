<?php

$components = glob('components/*.php');

foreach ($components as $component) {
    $php_filename = basename($component);
    $raw_filename = pathinfo(basename($component), PATHINFO_FILENAME);
    $cmd = sprintf('wget "https://ricoh.test/%s" -O "%s.html"', $php_filename, $raw_filename);
    exec($cmd);
}
