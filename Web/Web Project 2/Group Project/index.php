<!-- Page done by Darren Yang 8/5/2024 -->
<?php
    $name = "Home";
    $path = "./";
    include("assets/inc/header.php");
?>
<body>
    <?php
        include("assets/inc/nav.php");
    ?>
    <main>
        <div id="intro">
            <h1>UNIX 101 Survival Guide</h1>
            <p>Welcome to the beginners guide to UNIX where you will learn the basics
                of Unix and what it is. This website has many resources such as a list of
                different Unix commands and Unix applications. Some examples of the
                basic commands listed will be cd, mkdir, ls, pwd, mv, cp, touch, rmdir, and more.
                Application that will be covered are sftp, ssh, and nano/vi. We will also cover the
                as types of paths and the workings of files and its permissions.
                
            </p>
        </div>

        <div class="container">
            <div class="storage">
                <div class="stuff">
                    <a href="">Introduction to Unix</a>
                    <p>
                        This webpage is to introduce you to what exactly UNIX is and what it is used
                        for. It provides its history and the various parts it is divided into providing you
                        a summary of what UNIX is suppose to be and how it functions.
                    </p>
                </div>

                <div class="stuff">
                    <a href="">Unix Commands</a>
                    <p>
                    This webpage provides the list of commands Unix provides
                        as well as its different uses. This will facilitate the process
                        in learning the commands as there are many of them here. These commands
                        will consist of commands such as cd - changing your current directory and
                        pwd - prints out the current directory.
                    </p>
                </div>
            </div>

            <div class="storage">
                <div class="stuff">
                    <a href="">Unix Tutorials</a>
                    <p>
                        This webpage will go through the various applications you can do with Unix
                        such as sftp, vi/nano, and more. In addition, it will go in depth into working
                        with files, directories, and paths.

                    </p>
                </div>

                <div class="stuff">
                    <a href="Quiz.php">Quiz</a>
                    <p>
                        The quiz webpage is to test your learning and the knowledge you have taken
                        from this website. It test your knowledge on the Unix commands as well as some 
                        of applications such sftp,ssh,nano/vi, and more.
                    </p>
                </div>
            </div>
        
        </div>
    </main>
</body>

    <?php
        include("assets/inc/footer.php");
    ?>
</html>