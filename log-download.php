<?php
$url = $_GET['url']; // Retrieve the URL parameter from the GET request
// Log the download URL to a file or database
file_put_contents('download-log.txt', $url . "\n", FILE_APPEND);
?>
