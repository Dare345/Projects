    <!-- Navigation bar -->
    <nav>
        <div class="contain">
            <div>
                <a id="logo" href="<?php echo $path?>index.php">
                    <img src="<?php echo $path?>assets/img/rhodeislandlogo.png" alt="RhodeIslandLogo">
                </a>
            </div>
            <a href="#" class="burger" onclick="ham()">
                <img src="<?php echo $path?>assets/img/Hamburger.png" alt="hamburger">
            </a>
            <ul id="menu">
                    <li class="box" <?php echo (isset($page) && $page=='Home') ? ' id="crumb" ' :'' ?>>
                        <a href="<?php echo $path?>index.php">Home</a>
                    </li>
                    
                    <li class="box" <?php echo (isset($page) && ($page=='Historical' || $page=='Natural' || $page=='Monuments'
                    || $page=='Beaches' || $page=='LightHouses') ) ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" onclick="drop()">Landmarks</a>
                        <ul class="dropdown">
                            <li <?php echo (isset($page) && $page=='Historical') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>Historical/index.php">Historical Landmarks</a>
                            </li>

                            <li <?php echo (isset($page) && $page=='Natural') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>Natural/index.php">Natural Landmarks</a>
                            </li>

                            <li <?php echo (isset($page) && $page=='Monuments') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>Monuments/index.php">Monuments</a>
                            </li>

                            <li <?php echo (isset($page) && $page=='Beaches') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>Beaches/index.php">Beaches</a>
                            </li>

                            <li <?php echo (isset($page) && $page=='LightHouses') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>LightHouses/index.php">Lighthouses</a>
                            </li>
                        </ul>
                    </li>

                    <li class="box" <?php echo (isset($page) && ($page=='Cuisine' ||$page=='History')) ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" onclick="drop()">Local Cuisine & History</a>
                        <ul class="dropdown">
                            <li <?php echo (isset($page) && $page=='Cuisine') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>Cuisine/index.php">Local Cuisine</a>
                            </li>

                            <li <?php echo (isset($page) && $page=='History') ? ' class="grain" ' :'' ?>>
                                <a href="<?php echo $path?>History/index.php">State History</a>
                            </li>
                        </ul>
                    </li>

                    <li class="box" <?php echo (isset($page) && $page=='Geography') ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="<?php echo $path?>Geography/index.php">Geography</a>
                    </li>

                    <li class="box" <?php echo (isset($page) && $page=='Demographic') ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="<?php echo $path?>Demographic/index.php">Demographic</a>
                    </li>

                    <li class="box" <?php echo (isset($page) && $page=='Comments') ? ' id="crumb" ' :'' ?>>
                        <a class="cluster" href="<?php echo $path?>Comments/comments.php">Comments</a>
                    </li>
            </ul>

        </div>

    </nav>