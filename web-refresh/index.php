<?php

$css = [
    'assets/css/optimized1.css',
    'assets/css/optimized2.css',
    'assets/css/global.css',
    'assets/css/bs-wr.css',
    'assets/css/header-01.css',
];

?><!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ricoh - Web Refresh</title>

    <?php foreach ($css as $file): ?>
        <link rel="stylesheet" href="<?= $file ?>?t=<?= time() ?>">
    <?php endforeach; ?>

</head>

<body style="min-height: 1500px;">

    <main>
        <?php include 'components/header-01.php'; ?>
    </main>

    <script src="../assets/js/bs.js"></script>

</body>

</html>