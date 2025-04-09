<nav>
        <div class="contain">
            <div>
                <a id="logo" href="index.php">
                    <img src="assets/img/UnixLogo.png" alt="UnixLogo">
                </a>
            </div>
            <a href="#" class="burger" onclick="ham()">
                <img src="assets/img/Hamburger.png" alt="hamburger">
            </a>
            <ul id="menu">
                    <li class="box" <?php echo (isset($name) && $name=='Home') ? ' id="crumb" ' :'' ?>>
                        <a href="index.php">Home</a>
                    </li>

                    <li class="box" <?php echo (isset($name) && $name=='Introduction') ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="introduction.php">Introduction</a>
                    </li>

                    <li class="box" <?php echo (isset($name) && ($name=='tutorial1' ||$name=='tutorial2')) ? ' id="crumb" ' :'' ?>>
                        <a class="cluster">Tutorials</a>
                        <ul class="dropdown">
                            <li <?php echo (isset($name) && $name=='tutorial1') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>tutorial1.php">Tutorial 1</a>
                            </li>

                            <li <?php echo (isset($name) && $name=='tutorial2') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>tutorial2.php">Tutorial 2</a>
                            </li>
                        </ul>
                    </li>

                    <li class="box" <?php echo (isset($name) && $name=='Commands') ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="commands.php">Commands</a>
                    </li>

                    <li class="box" <?php echo (isset($name) && ($name=='Quiz' || $name=='QuizResults')) ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="Quiz.php">Quiz</a>
                    </li>

            </ul>

        </div>

    </nav>