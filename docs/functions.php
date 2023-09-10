<?php

define('DEV', true);
define('GH_BUILD_URL', 'https://ricoh-ph2.2xcode.dev');

/**
 * scan PHP
 */

function scan_php()
{
    $phpfiles = glob('*.php', GLOB_BRACE);

    $files = [];

    foreach ($phpfiles as $file) {

        if (!preg_match("/(serialize|nav|functions|index).php/i", $file))
            $files[] = $file;
    }
    return $files;
}

/**
 * serialize
 */

function get_serialized_component($components, $DB_FILE, $BUILD_PATH)
{
    global $argv;

    if (!file_exists('./' . $DB_FILE) || (isset($argv[1]) && $argv[1] == '-f')) {

        if (file_exists($BUILD_PATH)) {

            foreach ($components as $key => $file) {

                foreach ($file['build'] as $dir) {

                    $html_path = realpath(sprintf('%s%s/%s.html', $BUILD_PATH, $dir, $dir));

                    if (file_exists($html_path)) {

                        /**
                         * html
                         */

                        $out = shell_exec(sprintf("node parse-html.js %s %s", $html_path, $file['class'][$dir]));

                        $components[$key]['html'][$dir] = $out;

                        unset($out);

                        /**
                         * css
                         */

                        $css = shell_exec(sprintf("node parse-css.js %s", $html_path));

                        $css = trim($css);

                        $css_path = realpath(sprintf('%s%s/%s', $BUILD_PATH, $dir, $css));

                        if (file_exists($css_path)) {
                            $components[$key]['css'][$dir] = file_get_contents($css_path);
                        }
                    }
                }
            }
        }

        file_put_contents($DB_FILE, serialize($components));

    } else {

        $components = file_get_contents($DB_FILE);
        $components = unserialize($components);

    }

    return $components;
}