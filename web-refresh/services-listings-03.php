<?php

$css = [
    'assets/css/optimized1.css',
    'assets/css/optimized2.css',
    'assets/css/global.css',
    'assets/css/bs-wr.css',
    'assets/css/wr-icons.css',
    'assets/css/services-listings-03.css',
];

?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ricoh - Web Refresh - services-listings-03</title>

    <?php foreach ($css as $file): ?>
        <link rel="stylesheet" href="<?= $file ?>?t=<?= time() ?>">
    <?php endforeach; ?>

</head>

<body>

    <main class="container">
        <?php include 'components/services-listings-03.php'; ?>
    </main>

    <script src="./assets/js/bs.js"></script>
</body>

</html>