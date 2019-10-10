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


      <h1><span>Panel</span> anst9000_cv REST API</h1>
    </header>

    <div class="content">
      <div class="content-text">
        <h2>Hej, <b><?php echo htmlspecialchars($_SESSION["username"]); ?></b>!</h2>
        <p>Tryck på någon av följande knappar för att administrera innehållet i databasens tabeller.</p>
      </div>

      <div class="content-links">
        <form class="welcome-links">
          <input type="button" class="btn" id="educationBtn" value="Utbildning" onclick="window.location.href='educations.php'">
          <input type="button" class="btn" id="jobBtn" value="Arbete" onclick="window.location.href='jobs.php'">
          <input type="button" class="btn" id="websiteBtn" value="Hemsidor" onclick="window.location.href='websites.php'">
        </form>
      </div>

      <div class="signout">
        <form>
          <input type="button" class="btn" id="resetPasswordBtn" value="Byt lösen" onclick="window.location.href='reset-password.php'">
          <input type="button" class="btn" id="logoutBtn" value="Logga ut" onclick="window.location.href='logout.php'">
        </form>
      </div>
    </div>

    <?php include 'includes/footer.php'?>