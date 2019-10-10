<?php
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>

<?php include 'includes/head.php'?>

      <h1><span class="header-name">Hemsidor</span> anst9000_cv REST API</h1>

    <?php include 'includes/main.php'?>

    <?php include 'includes/footer.php'?>