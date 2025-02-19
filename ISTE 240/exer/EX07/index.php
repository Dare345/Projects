<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="assets/css/styles.css" rel="stylesheet">
    <title>Contact</title>
</head>
<body>
    <?php
    include("dbConn.php");
    if ($mysqli) {
        if(!empty($_GET['nam'])){
            $stmt=$mysqli->prepare("insert into comments (name, message) values (?, ?)");
            $stmt->bind_param("ss",$_GET['nam'],$_GET['com']);
            $stmt->execute();
            $stmt->close();
        }
            $result=$mysqli->query('select name, message, date from comments');
        }
    
    ?>

    <table>
        <tr>
            <td>Name</td>
            <td>Comment</td>
            <td>Date</td>
        </tr>

        <?php
        while($row = $result->fetch_assoc()){
            echo '<tr>'." ".'<td>'.$row['name'].'</td>'." ".'<td>'.$row['message'].'</td>'." ".'<td>'.$row['date'].'</td>'." ".'</tr>';
        }
        ?>
    </table>

    <form method="get">
        <label for="nam">Name</label>
        <input type="text" name="nam" id="name" placeholder="Darren Yang">

        <label for="com">Comment</label>
        <textarea id="message" name="com" placeholder="Something...." rows="3" cols="30" autocomplete="on"></textarea>

        <input id="submit" type="submit" value="Submit" action="index.php">
    </form>
</body>
</html>