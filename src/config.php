<?php
define('DB_SERVER', 'studentmysql.miun.se');
define('DB_NAME', 'anst9000');
define('DB_USERNAME', 'anst9000');
define('DB_PASSWORD', '52j0q658');
define('DB_PORT', '3306');

// define('DB_SERVER', 'localhost');
// define('DB_USERNAME', 'root');
// define('DB_PASSWORD', '');
// define('DB_NAME', 'anst9000_cv');

/* Attempt to connect to MySQL database */
try {
    $pdo = new PDO('mysql:host=' . DB_SERVER . ';dbname=' . DB_NAME, DB_USERNAME, DB_PASSWORD);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die('ERROR: Could not connect. ' . $e->getMessage());
}
