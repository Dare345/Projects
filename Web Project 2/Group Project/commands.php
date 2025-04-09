<!-- Page done by Ashley Locatelli 8/7/2024 -->

<?php
    $name = "Commands";
    $path = "./";
    include("assets/inc/header.php");
?>
<body>
    <?php
        include("assets/inc/nav.php");
    ?>
    <main>
        <section id="intro">
            <h2>Basic Commands</h2>
            <div class="list">
                <ul>
                    <li><strong>cd:</strong> Change directory. Example: <code>cd c:\Users\</code></li>
                    <li><strong>ls:</strong> List files and folders in the current directory.</li>
                    <li><strong>pwd:</strong> Print the current directory.</li>
                    <li><strong>mkdir:</strong> Make a new directory. Example: <code>mkdir homeworkFolder</code></li>
                    <li><strong>rmdir:</strong> Remove an empty directory.</li>
                    <li><strong>mv:</strong> Move a file or folder. Example: <code>mv file.txt /new/location/</code></li>
                    <li><strong>touch:</strong> Create a new empty file.</li>
                    <li><strong>cp:</strong> Copy a file or directory. Example: <code>cp file.txt file_copy.txt</code></li>
                    <li><strong>rm:</strong> Remove a file.</li>
                    <li><strong>chmod:</strong> Change file or directory permissions.</li>
                    <li><strong>chown:</strong> Change file or directory owner and group.</li>
                    <li><strong>ln:</strong> Link files together.</li>
                    <li><strong>cat:</strong> Display the contents of a file.</li>
                    <li><strong>head:</strong> Show the first few lines of a file.</li>
                    <li><strong>tail:</strong> Show the last few lines of a file.</li>
                    <li><strong>more:</strong> Show a file one page at a time.</li>
                    <li><strong>less:</strong> Show a file with advanced navigation.</li>
                    <li><strong>diff:</strong> Compare files line by line.</li>
                    <li><strong>patch:</strong> Apply a patch to a file. Example: <code>patch oldFile.txt &lt; newFile.diff</code></li>
                </ul>
            </div>
        </section>
    </main>

    <?php
        include("assets/inc/footer.php");
    ?>
</body>

</html>