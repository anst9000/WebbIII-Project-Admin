<?php
// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}

// Include config file
require_once "config.php";

// Define variables and initialize with empty values
$new_password = $confirm_password = "";
$new_password_err = $confirm_password_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Validate new password
    if (empty(trim($_POST["new_password"]))) {
        $new_password_err = "Please enter the new password.";
    } elseif (strlen(trim($_POST["new_password"])) < 6) {
        $new_password_err = "Password must have atleast 6 characters.";
    } else {
        $new_password = trim($_POST["new_password"]);
    }

    // Validate confirm password
    if (empty(trim($_POST["confirm_password"]))) {
        $confirm_password_err = "Please confirm the password.";
    } else {
        $confirm_password = trim($_POST["confirm_password"]);
        if (empty($new_password_err) && ($new_password != $confirm_password)) {
            $confirm_password_err = "Password did not match.";
        }
    }

    // Check input errors before updating the database
    if (empty($new_password_err) && empty($confirm_password_err)) {
        // Prepare an update statement
        $sql = "UPDATE webiii_users SET password = :password WHERE id = :id";

        if ($stmt = $pdo->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":password", $param_password, PDO::PARAM_STR);
            $stmt->bindParam(":id", $param_id, PDO::PARAM_INT);

            // Set parameters
            $param_password = password_hash($new_password, PASSWORD_DEFAULT);
            $param_id = $_SESSION["id"];

            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Password updated successfully. Destroy the session, and redirect to login page
                session_destroy();
                header("location: login.php");
                exit();
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }
        }

        // Close statement
        unset($stmt);
    }

    // Close connection
    unset($pdo);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Logga in</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css"> -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="wrapper">
      <header class="header">
        <h1><span>Ändra lösenord</span> anst9000_cv REST API</h1>
      </header>

      <div class="content">
        <div class="content-text">
          <h2>Ändra lösenord</h2>
          <p>Fyll i formuläret för att ändra ditt lösenord.</p>
        </div>

        <div class="content-links">

          <form class="login-links" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
              <div class="form-group <?php echo (!empty($new_password_err)) ? 'has-error' : ''; ?>">
                  <label>Nytt lösenord</label>
                  <input type="password" name="new_password" class="form-control" value="<?php echo $new_password; ?>">
                  <span class="help-block"><?php echo $new_password_err; ?></span>
              </div>
              <div class="form-group <?php echo (!empty($confirm_password_err)) ? 'has-error' : ''; ?>">
                  <label>Upprepa Lösenord</label>
                  <input type="password" name="confirm_password" class="form-control">
                  <span class="help-block"><?php echo $confirm_password_err; ?></span>
              </div>
              <div class="form-group">
                  <input type="submit" id="passwordSubmitBtn" class="btn btn-primary" value="Spara">
                  <input type="button" id="passwordRegretBtn" class="btn" value="Ångra" onclick="window.location.href='welcome.php'">
              </div>
          </form>
      </div>
    </div>

    <footer class="footer">
      <div class="part1">
        <p>Anders Strömberg</p>
      </div>
      <div class="part2">
        <p><i class="fa fa-envelope" aria-hidden="true"></i>
          anst9000@student.miun.se
        </p>
      </div>
      <div class="part3">
        <p>
          <i class="fa fa-phone" aria-hidden="true"></i>
            070 - 648 48 48
        </p>
      </div>
    </footer>

  </div>
</body>
</html>