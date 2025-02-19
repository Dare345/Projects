<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>ISTE-240</title>
	<style>
		/****************************************************/
		/*	Start - You won't need to mess with these rules	*/
		*, *:before, *:after {box-sizing: border-box;}
		.columnsContainer, footer, header { position: relative; margin: .5em; }
		.leftColumn, .rightColumn, footer, header {  border: 1px solid  #ccc; padding: 1.25em; }
		.leftColumn { margin-bottom: .5em; background-color:#E6A320}
		.rightColumn {background-color:#9EB40D}
		footer {background-color:#9692FE}
		header {background-color:#E64320}
		/*	End - You won't need to mess with these rules	*/
		/****************************************************/
		
		/****************************************************/
		/* Write your rules below!!! */
		
		/* CSS #1 */
		/* make the first letter of every p tag 3.8 times bigger and purple */
		p::first-letter{
			font-size:380%;
			color:purple;
		}
		
		/* CSS #2 */
		/* animate the header tag so it slides down from above on load of the page */
		/* animation should happen over 2 seconds, be linear, start at time 0 and only happen once */
		/* think CSS animation using @keyframes */
		
		@keyframes anim{
			from {bottom:250px;}
			to {bottom:0px;}
		}

		header{
			position:relative;
			animation-name:anim;
			animation-duration: 2s;
		}

		/* CSS #3 */
		/* MEDIA QUERIES */
		/* when the page is greater than 800px wide, make the .leftColumn and .rightColumn display side by side*/
		@media screen and (max-width:800px){
			.columnsContainer{
				flex-direction:row;
			}
		}
	</style>
	<script type="text/javascript">
		/* JavaScript functions go here */


        function toggle(x){
            let text = x.innerText;
            x.innerText = text == 'ISTE-240 2238 Final' ? 'I have changed it!' : 'ISTE-240 2238 Final'; 
        }

		

		function picture(){
			document.getElementById("pic").src = "assets/img/dsb.jpg";
		}

		function picture2(){
			document.getElementById("pic").src = "assets/img/img.png";
		}

		function validate(){
			const name = document.forms["order"]["n"].value;
			const address = document.forms["order"]["a"].value;
			const many = document.forms["order"]["h"].value;
			
			if (name === "" || name === null){
				document.getElementById("n").style.borderColor = "red";
			}else{
				document.getElementById("n").style.borderColor = "";
			}
			
			if(address === "" || address === null){
				document.getElementById("a").style.borderColor = "red";
			}else{
				document.getElementById("a").style.borderColor = "";
			}

			if(many === "" || many === null){
				document.getElementById("h").style.borderColor = "red";
			}else{
				document.getElementById("h").style.borderColor = "";
			}

			if ((name != null && name != "") && (address != null && name != "") && (many != null && many != "")){
				return true;
			}

            return false;
		}


	</script>
</head>