<?php

require_once 'functions.php';

$files = scan_php();

if ($files):

    ?>

    <nav class="navbar bg-body-tertiary sticky-top">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="d-none d-lg-inline-block" style="line-height: 30px;">Menu</span>
            </button>
            <a class="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasNavbar">

                <img src="https://www.2x.marketing/img/logo-scroll-2x.png" alt="" class="img-fluid"
                    style="height: 40px; margin-inline-end: 1rem;">

                <img src="https://www.ricoh.com/-/Media/Ricoh/Common/cmn_g_header_footer/img/logo/logo.svg" alt=""
                    class="img-fluid">

            </a>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                        Components
                        <div class="ms-3"><h6>&mdash; and its variants</h6></div>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <?php foreach ($files as $file): ?>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="<?= $file ?>">
                                    <?= _ucwords(str_replace('.php', '', $file)) ?>
                                </a>
                            </li>
                        <?php endforeach ?>
                    </ul>
                </div>
                <div class="ps-3 mb-5">
                    <h5>Source Code</h5>
                    <a href="https://github.com/charlespeter-dev/ricoh/" target="_blank">
                        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                            data-view-component="true" class="octicon octicon-mark-github v-align-middle color-fg-default">
                            <path
                                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>

<?php endif ?>