<!-- Page done by Darren Yang 8/5/2024 -->
<?php
    $name = "Quiz";
    $path = "./";
    include("assets/inc/header.php");
    include("assets/inc/nav.php");
?>
<body>
    <main>
        <div class="store">
            <h1>Unix Quiz</h1>
            <form name="quiz" action="QuizRes.php" onsubmit="return validateForm();" method="post">
                <div id="Q1">
                    <p>Q1: Which commands allows you to list out every file and folder in the current Directory?</p>
                    <div>
                        <input type="radio" name="q1" value="incorrect" id="pwd" checked="true">
                        <label for="pwd">pwd</label>
                    </div>

                    <div>
                        <input type="radio" name="q1" value="correct" id="ls">
                        <label for="ls">ls</label>
                    </div>

                    <div>
                        <input type="radio" name="q1" value="incorrect" id="ln">
                        <label for="ln">ln</label>
                    </div>

                    <div>
                        <input type="radio" name="q1" value="incorrect" id="mkdir">
                        <label for="mkdir">mkdir</label>
                    </div>
                </div>

                <div id="Q2">
                    <p>Q2: What exactly is Unix and what is it used for?</p>
                    <div>
                        <input type="radio" name="q2" value="correct" id="operatingSystem" checked="true">
                        <label for="operatingSystem">An Operating System that allows
                            users to interact with their computer.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q2" value="incorrect" id="machine-Language">
                        <label for="machine-Language">A machine language
                            for computers to understand and execute tasks asked by users.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q2" value="incorrect" id="computer">
                        <label for="computer">A new gen
                            laptop built to handle large application and heavy duty processing.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q2" value="incorrect" id="command">
                        <label for="command">A command in Unix that
                            list out every info on the company and its history.
                        </label>
                    </div>
                </div>

                <div id="Q3">
                    <p>Q3: What is the difference between the uses for absolute and relative file paths?</p>
                    <div>
                        <input type="radio" name="q3" value="incorrect" id="priority" checked="true">
                        <label for="priority">
                            The difference is in priority where absolute paths take more preference
                            over relative file paths.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q3" value="incorrect" id="location">
                        <label for="location">
                            The absolute paths are paths for a main folder in the home directory
                            while relative paths are paths for subfolders of main folders.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q3" value="incorrect" id="security">
                        <label for="security">
                            The types of path differ by the security of each file who can access them.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q3" value="correct" id="path">
                        <label for="path">
                            The difference is the precision in searching a file with absolute paths
                            including the entire path starting from your a drive while relative paths
                            are incomplete paths that are shorter but not as precise.
                        </label>
                    </div>
                </div>

                <div id="Q4">
                    <p>Q4: What exactly does chmod 755 do to a file?</p>
                    <div>
                        <input type="radio" name="q4" value="incorrect" id="rm" checked="true">
                        <label for="rm">
                            It removes a file from a directory.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q4" value="correct" id="per">
                        <label for="per">
                            It changes the permissions of a file to allow the owner to 
                            read, write, and execute while others to only read and execute.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q4" value="incorrect" id="change">
                        <label for="change">
                            It allows you to edit a file in the command line.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q4" value="incorrect" id="deletion">
                        <label for="deletion">
                        It deletes the root folder containing everything you have on your computer.
                        </label>
                    </div>
                </div>

                <div id="Q5">
                    <p>Q5:What is nano/vi in Unix and what are its uses?</p>
                    <div>
                        <input type="radio" name="q5" value="correct" id="edit" checked="true">
                        <label for="edit">
                            Nano/vi are text editors that enable the user to go into files and 
                            edit the contents within.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q5" value="incorrect" id="program">
                        <label for="program">
                            It is the programming language that Unix was programed by and can be
                            used by users to make their own additions to unix.
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q5" value="incorrect" id="manager">
                        <label for="manager">
                            It is a file manager built into Unix that organizes your files
                            allowing you to sort your files in alphabetical order
                        </label>
                    </div>

                    <div>
                        <input type="radio" name="q5" value="incorrect" id="ai">
                        <label for="ai">
                        Nano/vi are the ais built into Unix that will assist with whatever issues
                        or questions you may have.
                        </label>
                    </div>
                    <div>
                        <input type="submit" name="Submit" value=" Send Form" />
                    </div>
                </div>


                
            </form>
        </div>
    </main>
</body>

<?php
    include("assets/inc/footer.php");
?>
</html>