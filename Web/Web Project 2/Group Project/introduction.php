<?php
    $name = "Introduction";
    $path = "./";
    include './assets/inc/header.php';
?>

<body>

    <?php
        include './assets/inc/nav.php';
    ?>
    <main>
        <div id="intro">
            <h1>Introduction to Unix</h1>
        </div>
            <div class="container">
                <div class="stuff">
                <h2>What is Unix</h2>
                    <p>
                    Unix is an operating system used mainly by
                    programmers, but it is also for the general public. Created in 1969, Unix is one
                    of the earliest operating systems to use the C programming language. Many
                    operating systems are based on Unix like Linux and MacOS X.
                    </p>
                </div>

                <div class="stuff">
                    <h2>Parts of Unix</h2>
                    <p>
                        There are three parts that make up Unix: the kernel, the shell, and the programs.
                        The kernel deals with different kinds of management related to memory, files, 
                        network, etc. The shell serves as an interaction between the kernel and the user.
                        The user programs include user commands and Applications. 
                        There is a number of general commands that any computer has that could be accessed
                    </p>

                </div>
                

                <div class="stuff">
                    <h2>History</h2>
                    <p>
                    The Unix operating system was started by Dennis Ritchie and Ken
                    Thompson, both scientists from Bell Labs (Later named AT&T) in 1969. When
                    the Unix Fourth Edition was released in 1973, it was rewritten in C
                    programming language. This led to Unix becoming more accessible and having
                    a big impact in operating systems history. Over the decades, Unix has become
                    more popular. The 1980’s is where Unix began to increase in popularity and
                    reached its peak in the 1990’s.
                    </p>

                </div>

    </main>

<?php
    include './assets/inc/footer.php';
?>
    

</body>