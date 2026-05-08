<?php
    $page = "Comments";
    $path = "../";
    include($path.'assets/inc/header.php');
    include($path.'assets/inc/nav.php');
?>

<main>

    <?php
    include("../../../../dbConn.php");
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
    <div class="container">
        <form name="feedback" action="comments.php" onsubmit="return validateForm();" method="get">
                <label for="nam">Name</label>
                <input type="text" name="nam" id="nam"/>

                <label for="com">Comment</label>
                <textarea type="text" id="com" name="com" placeholder="Something...." rows="3" cols="30"></textarea>

                <input id="submit" type="submit" value="Submit"/>

        </form>

        <table>
            <tr>
                <td>Name</td>
                <td>Comment</td>
                <td>Date</td>
            </tr>

            <?php
            while($row = $result->fetch_assoc()){
                $str =filter_var($row['name'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                $str2 = filter_var($row['message'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                $date = filter_var($row['date'],FILTER_SANITIZE_FULL_SPECIAL_CHARS);
                echo '<tr>'." ".'<td>'.$str.'</td>'." ".'<td>'.$str2.'</td>'." ".'<td>'.$date.'</td>'." ".'</tr>';
                echo '<tr>'.'</tr>';
            }
            ?>
        </table>
    </div>
</main>

<?php
        include('../assets/inc/footer.php');
?>
</html>