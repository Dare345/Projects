<?php
    $page="Home";
    $path="./";
    include($path."assets/inc/header.php");
    include($path."assets/inc/nav.php");
?>
<body>

    <main>
        <!-- Introduction to Rhode Island -->
        <div class="intro">
            <h1>Welcome to Rhode Island</h1>
            <p>Welcome to the Ocean State! Best known for our lustrous and sandy beaches as well as beautiful coastal sceneries.<br>
            Although the state itself is small, it holds a great historical significance in the making of United States.<br>
            We also have various landmarks that you can visit such as Lighthouse attractions. If your more interested in the local cuisine,<br>
            Rhode Island has a wide variety of seafood cuisine that you will love.
            </p>
        </div>
        <!-- Summarizes the different webpages and includes imgs navigation to those webpages -->
        <div class="container">
            <div class="left">
                <div class="le" id="landmark">
                    <a href="Historical/index.php">Landmarks</a>
                </div>
                <p>There are several notable landmarks that display the rich history and culture of
                    Rhode Island. One landmark is The Breakers, a beautiful mansion built by the Vanderbilt family, acted as
                    symbol of the Gilded Age's wealth and prosperity. It's architecture perfectly displays the historical
                    architecture of Newport. Each landmark provides a glimpse to Rhode Island's 
                    past and progression.
                </p>
            </div>

            <div class="right">
                <div class="ri" id="cuisine">
                    <a href="Cuisine/index.php">Local Cuisine</a>
                </div>
                <p>The local cuisine of Rhode Island mainly consist of seafood like oysters, lobsters, and more.
                    Quahogs and clams are the main ingredients for most iconic dishes served in Rhode Island.
                    A few iconic dishes that are served are clam chowder, clam cakes, calamari, and other seafood dishes.
                    There are also a few non-seafood dishes such as Mushroom Strudel, Dough Boys, and more.


                </p>
            </div>

            <div class="left">
                <div class="le" id="history">
                    <a href="History/index.php">History</a>
                </div>
                <p>The history of Rhode Island runs deep going all the way back to the founding of the United States.
                    It was one of the original 13 colonies that fought against britain's rule.
                    It played a huge role in the signing of the Declaration of Independence as well as assisting in
                    the Revolutionary War. 
                </p>
            </div>

            <div class="right">
                <div class="ri" id="geography">
                    <a href="Geography/index.php">Geography</a>
                </div>
                <p>The smallest state in the United states located in the northeast where it borders
                    Conneticut and Massachusetts. It's landscape is mainly a coastline making it close 
                    to various bodies of water. Due to its landscape, it provides breathtaking views as well as
                    access to different beaches.
                </p>
            </div>

            <div class="left">
                <div class="le" id="demographic">
                    <a href="Demographic/index.php">Demographic</a>
                </div>
                <p>The demographic mostly consist of White ,but there are other races as well.
                    The other races in Rhode Island consist of Asian, African American, Native Hawaiian, and more.
                    There are more females than males in Rhode Island with the population just above a million. 
                </p>
            </div>
        </div>
    </main>
    <?php
        include("assets/inc/footer.php");
    ?>
</body>
</php>