<?php

require_once 'functions.php';

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?= sprintf('assets/css/index.css?=%s', time()) ?>">

    <title>Components Documentation</title>

    <style>
        .container,
        .container-fluid,
        .container-xxl,
        .container-xl,
        .container-lg,
        .container-md,
        .container-sm {
            --bs-gutter-x: 1.5rem;
        }
    </style>
</head>

<body>

    <?php if (defined('DEV') && DEV): ?>
        <script async id="__bs_script__" src="https://localhost:8080/browser-sync/browser-sync-client.js?v=2.29.3"></script>
    <?php endif ?>

    <?php require_once 'nav.php' ?>

    <main class="my-5">
        <div class="container">

            <div class="row">
                <div class="col-lg-6">
                    <h2>
                        Introduction
                    </h2>

                    <p>
                        This is a documentation all about the Components and its variants that was built by 2X. The
                        developer in 2X job scope is basically to support Ui/Ux translating the mock designs into to
                        reusable component, building complete web page with HTML and bootstrap framework. Once it is
                        completed, we communicate with Jason from RICOH which is the person in charge relating to
                        website development.
                    </p>

                    <p>
                        <strong>
                            Why Documenting
                        </strong>
                    </p>

                    <ul>
                        <li>
                            These components are reusable: Can be utilized for future RICOH projects
                        </li>
                        <li>
                            2X and RICOH will have a more organized, detailed documentation about all the components
                        </li>
                        <li>
                            Newly joined UI/UX Designers and Developers can easily learn about existing components
                        </li>
                        <li>
                            It is also possible to incorporate it into RICOH's existing website guidelines
                        </li>
                    </ul>

                    <p>
                        <strong>
                            How to use this documentation
                        </strong>
                    </p>

                    <ul>
                        <li>
                            Click the Menu button above <code class="btn btn-outline-secondary"
                                data-bs-toggle="offcanvas" href="#offcanvasNavbar">menu</code>
                        </li>
                        <li>
                            Click any of the component
                        </li>
                        <li>
                            Browse how the component looks like, examine the HTML structure and related CSS
                        </li>
                        <li>
                            Dig deeper how it was implemented by clicking the Live Demo link
                        </li>
                        <li>
                            To modify, clone the source code, see below
                        </li>
                    </ul>

                    <h2>
                        History
                    </h2>

                    <p>
                        Currently 2 kinds of designs exist: RICOH design vs. 2X design. Previous challenge: How to
                        enable these 2 designs to work together, and prevent code conflicts. The solution: Isolate 2X
                        code from RICOH code by means of "CSS specificity"
                    </p>

                    <ol>
                        <li>
                            <strong>Phase 1 &mdash; Phase 3</strong>

                            <ol type="a">
                                <li>
                                    In the begining, the source code is not organized, everything moving fast, need to
                                    deliver asap
                                </li>
                                <li>
                                    During deployment, conflict occurred between existing RICOH css and 2X css
                                </li>
                            </ol>
                        </li>

                        <li>
                            <strong>Phase 4</strong>
                            <ol type="a">
                                <li>
                                    The bootstrap source code recompiled and jailed under one CSS class called
                                    <code>.bootstrap-container</code>
                                </li>
                                <li>
                                    With this new approach, RICOH website can now freely use and apply any of
                                    the Bootstrap v5 classes without being into any conflict with existing RICOH CSS
                                    or at least minimize any collision.
                                </li>
                                <li>
                                    RICOH do not need to manually copy/paste certain classes from Bootstrap
                                    too, including the available Bootstrap component @ https://getbootstrap.com/
                                </li>
                            </ol>
                        </li>
                    </ol>

                    <h2>
                        Additional Resources
                    </h2>

                    <ul>
                        <li>
                            More information including demo video available here: <a
                                href="https://ricoh.2xcode.dev/RICOH_-_Phase_2_html_code_management.docx"
                                target="_blank">https://ricoh.2xcode.dev/RICOH_-_Phase_2_html_code_management.docx</a>
                        </li>
                        <li>
                            The source code is available @ <a href="https://github.com/charlespeter-dev/ricoh"
                                target="_blank">
                                https://github.com/charlespeter-dev/ricoh
                            </a>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    </main>


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