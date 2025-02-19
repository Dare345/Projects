<footer>
  		<div>
      <h2>Our Orders:</h2>
      <?php
		/*PHP/Database #1 - use your copy of adminer on solace to create the table '2238prac' with 5 columns:
			id - int, auto increment
			name - varchar(15)
			address - varchar(100)
			howMany - varchar(10)
			orderDate - timestamp [CURRENT_TIMESTAMP]
			
			Populate it with a row of data.
		*/
		//PHP/Database #2
      	//use your connection file that is outside of your Sites folder for connecting to the db!
      	//if there was a $_POST with data sent from all 3 inputs
      	
			//INSERT the name, address and howMany into the 2238prac table using a prepared statement
			include("../../../dbConn.php");
			if ($mysqli) {
				if(!empty($_GET['name'])){
					$stmt=$mysqli->prepare("insert into comments (name, address,howMany) values (?, ?, ?)");
					$stmt->bind_param("ssi",$_GET['name'],$_GET['address'],$_GET['howMany']);
					$stmt->execute();
					$stmt->close();
				}
					$result=$mysqli->query('select name, address, howMany, orderDate from 2238prac');
				}
			
			?>
      ?>
      <!-- //PHP/Database #3
      	//SELECT all of the data (after the addition of the new data, if there was any)
		//display the results -->
    </div>
  	</footer>
  	<!--PHP/modular site
      	//Cut this page into 3 logical chunks (header.php, index.php, footer.php)
      	//move the header.php and footer.php into your assets/includes/ folder
      	//write the php on the index.php page to pull them in!
		-->
</body>
</html>
