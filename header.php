<?php
$page=basename($_SERVER['PHP_SELF'],".php");
include "Config.php";
$select="SELECT * FROM categories";
$query=mysqli_query($config,$select);
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags --> 
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Blog</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Blog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link <?= ($page=="index")? 'active':''; ?>" href="index.php">Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
              <div class="dropdown-menu">
                <?php while($cats=mysqli_fetch_assoc($query)) {?>
                <a class="dropdown-item" href="category.php?id=<?= $cats['cat_id'] ?>">
                  <?= $cats['cat_name'] ?>
                </a>
                <?php } ?>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link <?= ($page=="login")? 'active':''; ?>" href="login.php">Login
              </a>
            </li>
          </ul>
          <?php 
          if (isset($_GET['keyword'])) {
            $keyword=$_GET['keyword'];
          }
          else
          {
            $keyword="";
          }
          ?>
          <div class="d-flex align-items-center" style="gap: 0.5rem;">
            <form class="d-flex" action="search.php" method="GET" style="margin-bottom:0;">
              <input class="form-control me-sm-2" type="text" placeholder="Search" name="keyword" required maxlength="70" autocomplete="off" value="<?= $keyword ?>">
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            <button id="darkModeToggle" type="button" title="Toggle dark mode" style="background:none; border:none; font-size:1.7em; cursor:pointer; color:#f7c873; margin-left:8px; display:flex; align-items:center;">
              <span id="darkModeIcon">🌙</span>
            </button>
          </div>
        </div>
      </div>
    </nav>