<?php
    $name = "AboutUs";
    $path = "./";
    include './assets/inc/header.php';
?>

<body>

    <?php
        include './assets/inc/nav.php';
    ?>

    <main>

            <div id="intro">
                <h1>Security Access</h1>
                <p>
                If you want to find any files using the command line, there’s 
                two ways, the absolute path, and the relative path. An absolute 
                path uses every step of folder names from the start of a 
                computer’s hard drives to the intended target. For example, 
                one can type in the command line “cd C:\home\&lt;username>\animals\pets\dog,” 
                in order to get to the dog folder. If you want to change directory, 
                like going from a dog folder to a whale folder, a relative path is a 
                better way to do it. A relative path is different from absolute path 
                in that it makes it easier to change folders. If you want to change 
                folders, you can type “sudo ..\&lt;username>\animals\not_pets\whale,” 
                instead of “cd C:\home\&lt;username>\animals\not_pets\whale,”

                </p>

                <p>
                If you want to edit a file using the shell, one of the ways to 
                do that is using nano. A nano is a text editor that displays 
                information to the shell. It is a simple command for beginners 
                that allows users to add text to a file easily. To start, type 
                “nano &lt;filename>,” in the shell like “nano essay.txt,”. The cool 
                thing about using nano is that if there is already a file with 
                the same name, you can edit the file, if there isn’t, nano will 
                create it for you. After typing in “nano &lt;filename>,” and 
                pressing the enter button, it will jump straight to the text 
                editor, so just type to write. To save, press control and “o” at 
                the same time then press enter. To quit, press control and “x” at 
                the same time.

                </p>

                <p>
                Another way to edit text is by using the vi command. The vi, or 
                visual editor, is similar to nano except it provides more complex 
                commands. To open up a file using vi, type in “vi &lt;filename>,” and 
                press enter. To edit the file, press “i” and press enter. It will 
                bring you to the end of a text if you have anything. One of the 
                important commands is “*u”, type that once, it will undo your last 
                action, but if you keep pressing “*u” it will redo and undo your 
                last action. To save, type in “:w”. You can also type in “:wq” to 
                save and quit or just “:q” to quit.

                </p>
            </div>
    </main>


    <?php
        include './assets/inc/footer.php';
    ?>

</body>