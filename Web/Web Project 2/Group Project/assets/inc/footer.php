<footer>
        <!-- footer that includes my contact info -->
    <footer>
        <div>
            <h1>Contact Us</h1>
            <ul>

                <li>
                    <a class="toe" href="aboutUs.php" <?php echo (isset($name) && $name=='AboutUs') ? ' id="crumb" ' :'' ?>>About Us</a>
                </li>

                <li>
                    <a class="toe" href="References.php" <?php echo (isset($name) && $name=='References') ? ' id="crumb" ' :'' ?>>References</a>
                </li>
                
                <li>
                    <a class="top" href="#">Back to Top</a>
                </li>

            </ul>
        </div>
    </footer>
</footer>