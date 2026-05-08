<!-- Page done by Darren Yang 8/5/2024 -->
<?php
    $name = "QuizResults";
    include("assets/inc/header.php");
    include("assets/inc/nav.php");
?>
<body>
    <main>
        <div id="results">
            <h1>Quiz Results</h1>

            <?php
            $correct = 0;
            $q1 = $_POST['q1'];
            $q2 = $_POST['q2'];
            $q3 = $_POST['q3'];
            $q4 = $_POST['q4'];
            $q5 = $_POST['q5'];

            if ($q1 == 'correct'){
                $correct++;
            }else{
                echo'<p>You got question 1 wrong</p>';
                
            }

            if ($q2 == 'correct'){
                $correct++;
            }else{
                echo'<p>You got question 2 wrong</p>';
            }

            if ($q3 == 'correct'){
                $correct++;
            }else{
                echo'<p>You got question 3 wrong</p>';
                
            }
            
            if ($q4 == 'correct'){
                $correct++;
            }else{
                echo'<p>You got question 4 wrong</p>';
                
            }

            if ($q5 == 'correct'){
                $correct++;
            }else{
                echo'<p>You got question 5 wrong</p>';
                
            }


            echo '<p>You got ' . ((string)$correct) . ' out of 5 question correct!</p>';

            ?>
        </div>
    </main>
</body>

<?php
    include("assets/inc/footer.php");
?>
</html>