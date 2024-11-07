<?php 
include "../Config.php";
session_start();
session_unset();
session_destroy();
header("location:http://localhost/PHP-Blog-Project/login.php");
exit();
?>