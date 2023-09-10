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
                        Component
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <?php foreach ($files as $file): ?>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="<?= $file ?>">
                                    <?= ucwords(str_replace('.php', '', $file)) ?>
                                </a>
                            </li>
                        <?php endforeach ?>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

<?php endif ?>