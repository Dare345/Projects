<?php
    $f_name = "Dan";
    $title = "first PHP page";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $f_name . "'s " . $title; ?> </title>
</head>
<body>
    <?php
        echo "My PHP script!";
        echo "<hr/>";
        echo $_SERVER;
    ?>
        <hr/>
    <?php
        // echo var_dump($_SERVER);
        echo "<hr/>";
        if(isset($_GET['tet'])){
            echo "<p>" . $_GET['test'] . "</p>";
        }else{
            echo '<p>No get with the name of test</p>';
        }
    ?>
</body>
</html>