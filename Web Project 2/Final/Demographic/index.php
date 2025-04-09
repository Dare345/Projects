<?php
    $page = "Demographic";
    $path = "../";
    include($path.'assets/inc/header.php');
    include($path.'assets/inc/nav.php');
?>
        <!-- Main content that includes descriptions that talk about the demographic
         of Rhode Island and includes tables that help show the demographic. -->
        <main>
            <h1>Demographic</h1>
            <div class="container">
                <div class="demo">
                        <h2>Population</h2>
                        <p>The Population of Rhode Island currently totals around 1,097,379 people
                            with the median age to be 40 years old. The population's ancestry a 
                            wide variety of roots such as Irish, Italian, English, French, German, Polish,
                            Subsaharan African, Scottish, and Norwegian roots.
                        </p>
                </div>

                <div class="demo">
                    <h3>Population Ages</h3>
                    <img src="../assets/img/DemographicAges.png" alt="Rhode_Island_Ages">
                </div>

                <div class="demo">
                    <h3>Population Ancestry</h3>
                    <img src="../assets/img/Ancestry.png" alt="Rhode_Island_Ancestries">
                </div>

                <div class="demo">
                    <h2>Race & Ethnicity</h2>
                    <p>The population of Rhode Island has wide variety of races 
                    such as white, Asian, African American, Latino, and more. A few ethnicities
                    are Native Hawaiian, American Indian, and Alaska Native. The 
                    majority of the population is comprised of white with around 782,920 people.
                    The second largest is Latino at around 182,101 and the third to be african american
                    with 62,128. Lastly, there are around only 38,961 people that are asian in the state.
                        
                    </p>
                </div>

                <div class="demo">
                    <h3>Race & Ethnicity Map(White)</h3>
                    <img src="../assets/img/Race&EthnicityMap.png" alt="Rhode_Island_Race_Map">
                </div>

                

                <div class="demo">
                    <h2>Income & Poverty</h2>
                    <p>The median household Income for Rhode Island is around 81,000
                        with poverty rate of 10.8%. In comparision, the median household Income
                        in the U.S is 74,755 making Rhode Island's population to earn more than
                        the most households in the U.S.
                    </p>
                </div>

                <div class="demo">
                    <h3>Population Income</h3>
                    <img src="../assets/img/Income.png" alt="Rhode_Island_Income">
                </div>

                <div class="demo">
                    <h3>Population Poverty</h3>
                    <img src="../assets/img/Poverty.png" alt="Rhode_Island_Poverty">
                </div>

                <div class="demo">
                    <h2>Education</h2>
                    <p>
                        Around 39.6% of the Rhode Island population has obtained a Bachelor's degree
                        or higher which is higher than the U.S which is 35.7%. 59% of the population
                        is enrolled into a school from grades kindergarden to highschool.
                    </p>
                </div>

                <div class="demo">
                    <h3>Degrees Attainment</h3>
                    <img src="../assets/img/Education.png" alt="Rhode_Island_Education">
                </div>

                <div class="demo">
                    <h3>Population Enrolled</h3>
                    <img src="../assets/img/SchoolEnrollment.png" alt="Rhode_Island_Enrollment">
                </div>

            </div>
        </main>

        <!-- A footer including my contact info -->
    <?php
        include('../assets/inc/footer.php');
    ?>