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
                In order to work with unix, you need to use the Secure Shell. 
                The Secure Shell (SSH) focuses on transferring data from one 
                device to another in a secure way. It is like sending a text 
                message or email message directly to the person you want to 
                talk to without that text or email seen by anyone. In the window 
                shell, try typing in “ssh &lt;username>@&lt;IP Address>,”, you should 
                see a long text with relevant information.
                </p>

                <p>
                Next, you can try SFTP. The Secure File Transfer Protocol (SFTP) 
                is a way to transfer files while protecting the files from and 
                to a remote server. This is to avoid other people from having 
                access to the files. To access the files on different computers, 
                type in  “sftp &lt;username>@&lt;IP Address>,”. In order to download 
                the file from the remote server, you must type 
                “get &lt;filename> &lt;local path>,”. Example: “get essay.txt 
                \home\johndoe,”. To upload a file, type “put &lt;file path> 
                &lt;remote path>,”. Example: “put \home\johndoe\essay2.txt \home\janedoe,”.
                </p>

                <p>
                If you want to restrict access to your file from yourself, 
                people in your group, and the public, one way to do so is by 
                using chmods. A chmod or change mode, allows you to control 
                who can read, write, and/or execute a file. To use, type in 
                “chmod &lt;options> &lt;permissions> &lt;filename>,”. The options part 
                can be ignored. What's important is the permissions. 
                There are two ways to write a permission. One is using 
                letters to replace words like r is read, w is write, and x 
                is executed. In addition, the names of who can access the 
                file is as, u is you, g is group, and o is others. You can 
                type it as “u=rwx,” where you can read, write, and execute. 
                Do the same for g and o and you have something like 
                “u=rwx,g=rx,o=r,” for example. Insert the file name and you 
                have “chmod u=rwx,g=rx,o=r essay.txt,”. Another way is to use 
                numbers. In this case, the numbers that represent access are as 
                follows: 4 is read, 2 is write and 1 is execute. Combine the 
                numbers together for each level of access, for example: you 
                can be written as 7 which is 4 + 2 + 1 or read, write, execute. 
                In this way, “chmod u=rwx,g=rx,o=r essay.txt,” in the previous 
                example can be rewritten as “chmod 754 essay.txt,”.
                </p>
            </div>
    </main>


    <?php
        include './assets/inc/footer.php';
    ?>

</body>