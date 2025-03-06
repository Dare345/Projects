<?php
    $page = "Geography";
    $path = "../";
    include($path.'assets/inc/header.php');
    include($path.'assets/inc/nav.php');
?>
        <!-- Main content that includes maps and a geography description -->
        <main>
            <h1>Geography</h1>
            <div class="container">
                <div id="features">
                    <p>
                        Rhode Island itself has five counties which are Providence,
                        Kent, Washington, Newport, and Bristol county and covers a total of 1,214 square miles including block island.
                        With a third of Rhode Island covered in water, the state contains bodies of water such as rivers and lakes. 
                        Some of the major rivers are the Pawcatuck River that flows into the 
                        Narragansett Bay with a smaller river, the Wood River, flowing into Pawcatuck River.
                        Rhode Island itself has around 200 rivers with most of them to be man made.
                        One of the largest man made lakes is the Scituate Reservoir which is supplied by
                        several streams. This reservoir is the main drinking supply for Providence and the nearby
                        towns. Rhode Island is comprised of many islands with several major islands such as
                        Aquidneck island and Rhode Island, not the state. The topography of Rhode Island consist of varying
                        elevations with a coastal plain that runs along the narragansett bay at an elevation lower than 100 feet.
                        North east of the bay there are rolling upland hills with elevations of 200 feet.
                        Heading west we have hills with 200 to 600 feet of elevation and a maximum elevation of
                        800 feet in the northwest corner of the state. The climate in Rhode Island is
                        typically normal with varying temperatures of 32 degrees Fahrenheit or lower. 
                        The chances of temperatures dropping to 0 degrees Fahrenheit or lower are rare
                        with it only happening once a year along the coast. The highest temperature usually
                        goes up to 90 degrees Fahrenheit or more in metropolitan areas such as Providence or Warwick.
                        The preciptation in Rhode Island averages between 42 to 46 inches increasing starting 
                        from west to east.
                    </p>
                </div>

                <div id="maps">
                    <div class="map">
                        <h2>Rhode Island State Map</h2>
                        <img src="../assets/img/RhodeIslandstatemap.jpg" alt="Rhode_Island_State_Map">
                    </div>

                    <div class="map">
                        <h2>Newport Map</h2>
                        <img src="../assets/img/NewportMapwithattractions.jpg" alt="Newport_Map">
                    </div>

                    <div class="map">
                        <h2>Block Island Map</h2>
                        <img src="../assets/img/BlockIslandMap.webp" alt="Block_Island Map">
                    </div>

                    <div class="map">
                        <h2>Charlestown Breachway Beach</h2>
                        <img src="../assets/img/Breachwaymap.jpg" alt="Charlestown_Breachway_Beach_Map">
                    </div>
                </div>
            </div>
        </main>
<!-- footer that includes my contact info -->
        <?php
            include('../assets/inc/footer.php');
        ?>