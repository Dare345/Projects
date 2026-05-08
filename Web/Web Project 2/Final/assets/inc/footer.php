    <!-- footer that includes my contact info -->
    <footer>
        <div>
            <h1>Contact Us</h1>
            <ul>
                <li>
                    <a href="mailto:ydarren615@gmail.com">ydarren615@gmail.com</a>
                </li>

                <li>
                    <a href="tel:3475678767">347-567-8767</a>
                </li>

                <li <?php echo (isset($page) && $page=='Grading') ? ' class="crumb" ' :'' ?>>
                    <a href="<?php echo $path?>Grading/index.php">Grading Page</a>
                </li>

                <li <?php echo (isset($page) && $page=='References') ? ' class="crumb" ' :'' ?>>
                    <a href="<?php echo $path?>References/index.php">References</a>
                </li>
                
                <li>
                    <a class="top" href="#">Back to Top</a>
                </li>

            </ul>
        </div>
    </footer>