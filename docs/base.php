<?php

if (!empty($components)):

    ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="<?= sprintf('assets/css/index.css?=%s', time()) ?>">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/default.min.css">

        <title>
            <?= $comp_meta[$SLUG]['label'] ?> | Component
        </title>
    </head>

    <body>

        <?php if (defined('DEV') && DEV): ?>
            <script async id="__bs_script__" src="https://localhost:8080/browser-sync/browser-sync-client.js?v=2.29.3"></script>
        <?php endif ?>

        <?php require_once 'nav.php' ?>

        <div class="container-fluid">

            <div class="container">
                <div class="py-5 text-center">
                    <h1>
                        <?= sprintf('%s and its variants', _ucwords($components['label'])) ?>
                    </h1>
                </div>
            </div>

            <?php foreach ($components['build'] as $key => $dir): ?>

                <div class="iframe">
                    <iframe src="<?= sprintf('%s/%s/%s.html', GH_BUILD_URL, $dir, $dir) ?>"
                        style="width: <?= $components['iframe'][$dir]['width'] ?>; min-height: <?= $components['iframe'][$dir]['height'] ?>;"
                        frameborder="0" scrolling="no"></iframe>
                </div>

                <div class="html py-lg-5 my-lg-5">
                    <div class="container">

                        <nav>
                            <div class="nav nav-tabs nav-justified">

                                <div class="nav-link active" data-bs-toggle="tab" data-bs-target="#tab-content-<?= $dir ?>-1">
                                    <span>HTML</span>
                                </div>

                                <div class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-content-<?= $dir ?>-2">
                                    <span>CSS</span>
                                </div>

                                <div class="nav-link">
                                    <span><a href="<?= sprintf('%s/%s/%s.html', GH_BUILD_URL, $dir, $dir) ?>"
                                            target="_blank">LIVE DEMO</a></span>
                                </div>
                            </div>
                        </nav>

                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="tab-content-<?= $dir ?>-1">
                                <pre><code class="language-html">            <?= htmlentities($components['html'][$dir]) ?></code></pre>
                            </div>
                            <div class="tab-pane fade" id="tab-content-<?= $dir ?>-2">
                                <pre><code class="language-css"><?= htmlentities($components['css'][$dir]) ?></code></pre>
                            </div>
                        </div>

                    </div>
                </div>

            <?php endforeach ?>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
        <script>
            window.addEventListener('DOMContentLoaded', function () {
                hljs.highlightAll();
            });
        </script>

    </body>

    </html>

<?php endif ?>